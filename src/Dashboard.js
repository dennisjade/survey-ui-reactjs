import React, {Component} from 'react';
// import Dashboard from 'react-dazzle';
// import Container from './Container';
// import 'bootstrap/dist/css/bootstrap.css';
// import BarGraph from './BarGraph';
// import DoughnutChart from  './widgets/DoughnutChart';
// import CustomFrame from './CustomFrame';
// import {Grid, Row, Col, Clearfix} from 'react-bootstrap';
// import Container from 'muicss/lib/react/container';
// import Row from 'muicss/lib/react/row';
// import Col from 'muicss/lib/react/col';
import MyContent from './Content';
import logo from './images/nextbillion-logo.png';
// import { Row, Col } from 'antd';
import './App.css';
import './css/layout.css';
import { Layout, Menu, Icon } from 'antd';
const { Header, Sider, Content } = Layout;

export class SiderDemo extends Component {
  constructor(props){
    super(props);
    this.state = {
      selectedMenu: 1,
      collapsed: false
    }
    this.handleSelectMenu = this.handleSelectMenu.bind(this);
  }

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  handleSelectMenu(item, key, selectedKeys) {
    console.log('handleSelectMenu', item, key, selectedKeys);
    this.setState({
      selectedMenu: item.key
    });
  }

  render() {
    return (
      <Layout>
        <Sider
          trigger={null}
          collapsible
          collapsed={this.state.collapsed}
        >
          <div className="logo" >
            <img alt="NextBillion" src={logo} height={40}/>
          </div>
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']} onSelect={this.handleSelectMenu}>
            <Menu.Item key="1">
              <Icon type="user" />
              <span>Agents</span>
            </Menu.Item>
            <Menu.Item key="2" onClick>
              <Icon type="file" />
              <span>Pre-Survey</span>
            </Menu.Item>
            <Menu.Item key="3">
              <Icon type="edit" />
              <span>Post-Survey</span>
            </Menu.Item>
            <Menu.Item key="4">
              <Icon type="question" />
              <span>Survey Questions</span>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Header style={{ background: '#fff', padding: 0 }}>
            <Icon
              className="trigger"
              type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
              onClick={this.toggle}
            />
            <span className="headerTitle">Next Billion Asia - Survey Analysis</span>
          </Header>
          <Content style={{ margin: '24px 16px', padding: 24, background: '#fff', minHeight: 280 }}>
            <MyContent selectedKey={this.state.selectedMenu} />
          </Content>
        </Layout>
      </Layout>
    );
  }
}

// class App extends Component {
//
//   render() {
//     return (
//       <div>
//         <Row>
//           <Col span={12}>col-12</Col>
//           <Col span={12}>col-12</Col>
//         </Row>
//         <Row>
//           <Col span={8}>col-8</Col>
//           <Col span={8}>col-8</Col>
//           <Col span={8}>col-8</Col>
//         </Row>
//         <Row>
//           <Col span={6}>col-6</Col>
//           <Col span={6}>col-6</Col>
//           <Col span={6}>col-6</Col>
//           <Col span={6}>col-6</Col>
//         </Row>
//       </div>
//     )
//   }
// }
// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       // Widgets that are available in the dashboard
//       widgets: {
//         EngineTelemetricsWidget: {
//           type: BarGraph,
//           title: 'Engine',
//         },
//         PerformanceWidget: {
//           type: BarGraph,
//           title: 'Reactor Temp',
//         },
//         ShipVitalTelemetricsWidget: {
//           type: BarGraph,
//           title: 'Reactor Telemetrics',
//         },
//       },
//       // Layout of the dashboard
//       layout: {
//         rows: [{
//           columns: [{
//             className: '.col-md-12',
//             widgets: [{key: 'ShipVitalTelemetricsWidget'}],
//           }],
//         }, {
//           columns: [{
//             className: '.col-xs-6 .col-md-4',
//             widgets: [{key: 'EngineTelemetricsWidget'}],
//           }, {
//             className: '.col-xs-6 .col-md-4',
//             widgets: [{key: 'PerformanceWidget'}],
//           }, {
//             className: '.col-xs-6 .col-md-4',
//             widgets: [{key: 'PerformanceWidget'}],
//           }],
//         }],
//       },
//       editMode: false,
//       isModalOpen: false,
//       addWidgetOptions: null,
//     };
//   }
//
//   render () {
//     return (
//       <Container>
//         <Dashboard
//           frameComponent={CustomFrame}
//           onRemove={this.onRemove}
//           layout={this.state.layout}
//           widgets={this.state.widgets}
//           editable={this.state.editMode}
//           onAdd={this.onAdd}
//           onMove={this.onMove}
//           addWidgetComponentText="Add New Widget"
//         />
//       </Container>
//     )
//   }
// }

// export default App;