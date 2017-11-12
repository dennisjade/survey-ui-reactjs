import React, {Component} from 'react';
import { compose, withProps } from "recompose";
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps";
import MarkerClusterer from "react-google-maps/lib/components/addons/MarkerClusterer";
import { Form, Button, Select, DatePicker } from 'antd';
import moment from 'moment';
const { RangePicker } = DatePicker;
const FormItem = Form.Item;
const formItemLayout = {
  labelCol: { span: 3 }
};

const MyMapComponent = compose(
  withProps({
    googleMapURL: "https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `400px` }} />,
    mapElement: <div style={{ height: `100%` }} />,
  }),
  withScriptjs,
  withGoogleMap
)((props) =>
  <GoogleMap
    defaultZoom={1}
    defaultCenter={{ lat: 0, lng: 0 }}
  >
    <MarkerClusterer
      averageCenter
      enableRetinaIcons
      gridSize={60}
    >
      <Marker position={{ lat: -34.397, lng: 150.644 }} />
      <Marker position={{ lat: 32.4712391, lng: -25.9549794}} />
      <Marker position={{ lat: -25.9408498, lng:  32.4867995}} />

    </MarkerClusterer>
  </GoogleMap>
);

class AgentLocation extends Component{
  constructor(props){
    super(props);
    this.state = {
      marker: []
    }
  }

  populate() {

  }

  render() {
    return (
      <div>
        <Form>
          <FormItem {...formItemLayout} label="Question">
            <Select
              showSearch={true}
              optionFilterProp="children"
              placeholder="Select an agent"
              onChange={this.handleSelect}
              style={{width:"600px"}}
              labelInValue={true}
            >

            </Select>
          </FormItem>
          <FormItem {...formItemLayout} label="Response date">
            <RangePicker onChange={this.handleChangeStartDate} defaultValue={moment('2015-11-01')}/>
            <Button id='btn-search' type="primary" shape="circle" icon="search" onClick={this.handleClick}/>
          </FormItem>
        </Form>
        <MyMapComponent />
      </div>
    );
  }
}

export default AgentLocation;