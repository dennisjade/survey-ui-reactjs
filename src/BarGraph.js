import React, { Component } from 'react';
import {core as ZingChart} from 'zingchart-react';
import axios from 'axios';
import { DatePicker, message } from 'antd';
import moment from 'moment';
import { Button } from 'antd';
// import enUS from 'antd/lib/locale-provider/en_US';
// import { DatePickerConfig } from './helpers/utils';



const { RangePicker } = DatePicker;
const dateFormat = 'YYYY-MM-DD';
const DatePickerConfig = {
  "lang": {
    "placeholder": "Select date",
    "rangePlaceholder": [
      "Start date",
      "End date"
    ],
    "today": "Today",
    "now": "Now",
    "backToToday": "Back to today",
    "ok": "Ok",
    "clear": "Clear",
    "month": "Month",
    "year": "Year",
    "timeSelect": "Select time",
    "dateSelect": "Select date",
    "monthSelect": "Choose a month",
    "yearSelect": "Choose a year",
    "decadeSelect": "Choose a decade",
    "yearFormat": "YYYY",
    "dateFormat": "YYYY-MM-DD",
    "dayFormat": "D",
    "dateTimeFormat": "YYYY-MM-DD HH:mm:ss",
    "monthFormat": "MMMM",
    "monthBeforeYear": true,
    "previousMonth": "Previous month (PageUp)",
    "nextMonth": "Next month (PageDown)",
    "previousYear": "Last year (Control + left)",
    "nextYear": "Next year (Control + right)",
    "previousDecade": "Last decade",
    "nextDecade": "Next decade",
    "previousCentury": "Last century",
    "nextCentury": "Next century"
  },
  "timePickerLocale": {
    "placeholder": "Select time"
  }
};
moment.locale('en-US');

function messagePopUp(type) {
  switch (type){
    case 'nodata':
      message.info('No data can be retrieve');
      break;
    default:
      message.info('Hello there.');
  }

}

export class AgentBarGraph extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.handleChangeStartDate = this.handleChangeStartDate.bind(this);
    this.getAgentsBySubmittedDate = this.getAgentsBySubmittedDate.bind(this);
    this.state = {
      startDate: moment().format(dateFormat),
      endDate: moment().format(dateFormat),
      error: '',
      agentBySubmittedDate: {
        type: 'hbar',
        title:{
          "text":"Survey submission per date",
          "adjust-layout":true
        },
        plot: {
          stacked: true,
          animation: {
            sequence: 3,
            effect: 4,
            method: 1,
            speed: 300
          }
        },
        legend: {
          borderWidth: 0
        },
        plotarea: {
          margin: 'dynamic'
        },
        scaleX: {
          labels: []
        },
        series: [
          {
            values: [],
            backgroundColor: '#FF6600',
            text: 'Agents'
          }
        ]
      }
    }
  };

  getAgentsBySubmittedDate() {
    let url = 'http://localhost:10010/agents/submitted/survey';
    axios.get(url, {
      params: {
        dateStart: this.state.startDate,
        dateEnd: this.state.endDate
      }
    })
      .then( response => {
        let ret = response.data;
        if (ret.data.values.length===0){
          messagePopUp('nodata');
        }

        this.setState({
          agentBySubmittedDate: {
            type: 'hbar',
            title:{
              "text":"Survey submission per date",
              "adjust-layout":true
            },
            plot: {
              tooltip: {
                text: "%kt @ %vt agent(s) submitted",
                backgroundColor: '#404040'
              },
              stacked: true,
              animation: {
                sequence: 3,
                effect: 4,
                method: 1,
                speed: 300
              }
            },
            legend: {
              borderWidth: 0
            },
            plotarea: {
              margin: 'dynamic'
            },
            scaleX: {
              labels: ret.data.xLabel
            },
            series: [
              {
                values: ret.data.values,
                backgroundColor: '#FF6600',
                text: 'Number of Agents'
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

  render() {
    return (
      <div>
        <RangePicker onChange={this.handleChangeStartDate} locale={DatePickerConfig} />
        <Button id='btn-search' type="primary" shape="circle" icon="search" onClick={this.handleClick}/>
        <ZingChart id="chart1"  legend="true" data={this.state.agentBySubmittedDate} />
      </div>
    );
  }
}

export class PreSurveyBarGraph extends Component {
  render() {
    return (
      <div>This is a presurvey</div>
    )
  }
}

export default AgentBarGraph;
