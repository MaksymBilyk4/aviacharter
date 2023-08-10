import React from 'react';
import {useLocation} from "react-router-dom";
import {Menu} from "antd";
import {menuItems} from "../../utils/menuItems/menuItems";

const SideMenu = () => {

    const location = useLocation();

    return (
        <Menu
            defaultSelectedKeys={[location.pathname]}
            theme="dark"
            mode="inline"
            items={menuItems}
        />
    );
};

export default SideMenu;