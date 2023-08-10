import React, {useState} from 'react';
import {Button, Layout, theme} from "antd";
import Sider from "antd/es/layout/Sider";
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
} from "@ant-design/icons";
import {Content, Header} from "antd/es/layout/layout";

import SideMenu from "./SideMenu";
import PropTypes from "prop-types";

const MainLayout = ({children}) => {
    const [collapsed, setCollapsed] = useState(false);
    const {token: {colorBgContainer},} = theme.useToken();


    return (
        <Layout style={{minHeight: "100vh"}}>
            <Sider style={{minWidth: "600px"}} trigger={null} collapsible collapsed={collapsed}>
                <SideMenu/>
            </Sider>
            <Layout>
                <Header
                    style={{
                        padding: 0,
                        background: colorBgContainer,
                        display: "flex"
                    }}
                >
                    <Button
                        type="text"
                        icon={collapsed ? <MenuUnfoldOutlined/> : <MenuFoldOutlined/>}
                        onClick={() => setCollapsed(!collapsed)}
                        style={{
                            fontSize: '16px',
                            width: 64,
                            height: 64,
                        }}
                    />
                    <h1>Welcome to Star Avia travel</h1>
                </Header>
                <Content
                    style={{
                        margin: '24px 16px',
                        padding: 24,
                        minHeight: 280,
                        background: colorBgContainer,
                    }}
                >
                    {children}
                </Content>
            </Layout>
        </Layout>
    );
};

MainLayout.propTypes = {
    children: PropTypes.object,
}

export default MainLayout;