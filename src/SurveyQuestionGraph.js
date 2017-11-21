import React, { Component } from 'react';
import {core as ZingChart} from 'zingchart-react';
import axios from 'axios';
import moment from 'moment';
import { DatePicker, Button, Form, message, Select } from 'antd';

const { RangePicker } = DatePicker;
const dateFormat = 'YYYY-MM-DD';
const FormItem = Form.Item;
const Option = Select.Option;
const formItemLayout = {
  labelCol: { span: 3 }
};

function messagePopUp(type) {
  switch (type){
    case 'nodata':
      message.info('No data can be retrieve');
      break;
    case 'noquestion':
      message.info('Please select a question to plot');
      break;
    default:
      message.info('Hello there.');
  }

}

class SurveyQuestionsGraph extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.handleChangeStartDate = this.handleChangeStartDate.bind(this);
    this.getAgentsBySubmittedDate = this.getAgentsBySubmittedDate.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
    this.state = {
      startDate: moment().format(dateFormat),
      endDate: moment().format(dateFormat),
      q: '',
      qLabel: '',
      qDocType: '',
      agentBySubmittedDate: {
        type: 'pie3d',
        title:{
          text: "Create a filter to plot a pie graph",
          fontSize: "12px"
        },
        series: [
          {
            values: []
          }
        ]
      }
    }
  };

  getAgentsBySubmittedDate() {
    if (!this.state.q){
      return messagePopUp('noquestion');
    }
    let url = process.env.REACT_APP_BASE_URL + '/survey/question';
    let params = {
      dateStart: this.state.startDate,
      dateEnd: this.state.endDate,
      docType: this.state.qDocType,
      question: this.state.q
    };
    if (!this.state.qDocType){
      delete params.docType;
    }
    axios.get(url, {
      params: params
    })
      .then( response => {
        let ret = response.data;
        if (ret.data.valuesPost.length===0  && ret.data.valuesPre.length===0){
          return messagePopUp('nodata');
        }

        this.setState({
          agentBySubmittedDate: {
            graphset: [
              {
                type: 'ring3d',
                title: {
                  text: this.state.qLabel,
                  fontSize: "12px"
                },
                subtitle: {
                  text: '[Pre event]'
                },
                plot: {
                  tooltip: {
                    text: "%t @ %vt response(s)",
                    backgroundColor: '#404040'
                  }
                },
                legend: {
                  visible: false
                },
                scale: {
                  "size-factor": 0.5
                },
                x: "0%",
                y: "0%",
                height: "100%",
                width: "50%",
                series: ret.data.valuesPre
              },
              {
                type: 'ring3d',
                title: {
                  text: this.state.qLabel,
                  fontSize: "12px"
                },
                subtitle: {
                  text: '[POST event]'
                },
                plot: {
                  tooltip: {
                    text: "%t @ %vt response(s)",
                    backgroundColor: '#404040'
                  }
                },
                legend: {
                  visible: false
                },
                scale: {
                  "size-factor": 0.5
                },
                height: "100%",
                width: "50%",
                x: "45%",
                y: "0%",
                series: ret.data.valuesPost
              }
            ]
          }
        })
      })
      .catch( error => {
        this.setState({error: error})
      });
  }
  handleChangeStartDate(date, dateString) {
    this.setState({
      startDate: dateString[0],
      endDate: dateString[1]
    });
  }
  handleClick(e) {
    this.getAgentsBySubmittedDate();
  }
  handleSelect(value) {
    this.setState({
      q: value.key,
      qLabel: value.label,
      agentBySubmittedDate: {
        title:{
          text: value.label,
          fontSize: "12px"
        }
      }
    })
  }
  render() {
    return (
      <div>
        <Form>
          <FormItem {...formItemLayout} label="Question">
            <Select
                    showSearch={true}
                    optionFilterProp="children"
                    placeholder="Select a question to plot"
                    onChange={this.handleSelect}
                    style={{width:"600px"}}
                    labelInValue={true}
                    >
              <Option value="q_cleanCookingBenefits">What are the benefits of cooking with clean stove?</Option>
              <Option value="q_percentageCharcoalFireword">What % of Moz households rely on charchoal and firewood?</Option>
              <Option value="q_safeCharcoalIndoors">How safe is it to burn wood or charcoal indoors?</Option>
              <Option value="q_wherePurchaseStove">Do you know where you can purchase an improved cookstove near your home?</Option>
            </Select>
          </FormItem>
          <FormItem {...formItemLayout} label="Response date">
            <RangePicker onChange={this.handleChangeStartDate} defaultValue={moment('2015-11-01')}/>
            <Button id='btn-search' type="primary" shape="circle" icon="search" onClick={this.handleClick}/>
          </FormItem>
        </Form>
        <ZingChart id="chart1"  legend="true" width="100%" data={this.state.agentBySubmittedDate} />
      </div>
    );
  }
}

export default SurveyQuestionsGraph;