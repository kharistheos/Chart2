import React, { Component } from 'react';
import { Button,Menu, Icon, Avatar } from 'antd';
import { Link } from 'react-router-dom';

const { SubMenu } = Menu;

    export default class Navbar extends Component {
        state = {
            confirmDirty: true,
            expandIconPosition: 'left',
        };
        
        logoutHandler =(e) => {
            localStorage.removeItem('usertoken')
            this.props.history.push('/login');
        };

  render() {
    return (
        <React.Fragment>
            <div>
                <Menu className="Menu" onClick={this.handleClick} selectedKeys={[this.state.current]} mode="horizontal">
                    <Avatar src="https://png.pngtree.com/png-clipart/20190520/original/pngtree-joystick-game-graphic-design-element-vector-illustration-png-image_3698982.jpg" style={{margin: "10px"}} />
                    <Button type="link" style={{marginLeft: "150px", color: 'white' }} ><Link to="/">< h3 style={{ color: 'white' }}>Overview</h3></Link></Button>
                    <SubMenu
                    style={{ position: "absolute", right: "0px"}}
                    title={
                    <span className="submenu-title-wrapper">
                        <Icon type="user" />
                    </span>
                    }
                >
                    <Menu.ItemGroup>
                        <Menu.Item key="setting:1"><Icon type="profile" />Account<Link to="/ManageAccount" /></Menu.Item>
                        <Menu.Item key="setting:2"><Icon type="exclamation-circle" theme="filled" />Developers <Link to="/ManageDev" /></Menu.Item>
                        <Menu.Item key="setting:3"><Icon type="file-done" />Applications<Link to="/ManageApp" /></Menu.Item>
                        <Menu.Item key="setting:4"><Icon type="setting" />Members<Link to="/Member" /></Menu.Item>
                        <Menu.Item key="setting:5" onClick={this.logoutHandler.bind(this)}><Icon type="logout" />Logout</Menu.Item>
                    </Menu.ItemGroup>
                </SubMenu>
                </Menu>
            </div>
        </React.Fragment>    
        );
    }
};  

