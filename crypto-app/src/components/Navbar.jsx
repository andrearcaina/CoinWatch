// .jsx differentiates js files vs component files
import React from 'react';
import { Button, Menu, Typography as Tp, Avatar } from 'antd';
import { Link } from 'react-router-dom';
import { HomeOutlined, MoneyCollectOutlined, BulbOutlined, FundOutlined, MenuOutlined } from '@ant-design/icons';

import icon from '../images/cryptocurrencyicon.png';

const Navbar = () => {
    return (
        <div className="nav-container">
            <div className="logo-container">
                <Avatar className="avatar" shape="circle" src={icon} />
                <Tp.Title level={2} className="logo">
                    <Link to="/">
                        CoinWatch
                    </Link>
                </Tp.Title>
                
                {/*<Button className="menu-control-container">
                    
                </Button>*/}
            </div>
            
            <Menu theme="dark">
                <Menu.Item icon={<HomeOutlined />}>
                    <Link to="/">Home</Link>
                </Menu.Item>

                <Menu.Item icon={<FundOutlined />}>
                    <Link to="/cryptocurrencies">Cryptocurrencies</Link>
                </Menu.Item>

                <Menu.Item icon={<BulbOutlined />}>
                    <Link to="/news">News</Link>
                </Menu.Item>
            </Menu>
        </div>
    )
}

export default Navbar;
