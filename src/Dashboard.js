import React, {Component} from 'react';
import MyContent from './Content';
import logo from './images/nextbillion-logo.png';
import logo40 from './images/nextbillion-logo40.png';
import './App.css';
import './css/layout.css';
import { Layout, Menu, Icon } from 'antd';
const { Header, Sider, Content } = Layout;

export class SiderDemo extends Component {
  constructor(props){
    super(props);
    this.state = {
      selectedMenu: 1,
      collapsed: false,
      logoImg: logo
    };
    this.handleSelectMenu = this.handleSelectMenu.bind(this);
  }

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
      logoImg: !this.state.collapsed?logo40:logo
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
            <img alt="NextBillion" src={this.state.logoImg} height={40} />
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
            <Menu.Item key="5">
              <Icon type="question" />
              <span>Agent Location</span>
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

// export default App;