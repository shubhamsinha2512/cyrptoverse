import React from 'react'
import { Button, Typography, Menu, Avatar } from 'antd'
import { HomeOutlined, MoneyCollectOutlined, BulbOutlined, FundOutlined, MenuFoldOutlined } from "@ant-design/icons"
import { Link } from 'react-router-dom'
import icon from "../images/cryptocurrency.png"

function Navbar() {
    return (
        <div className='nav-container'>
            <div className='logo-container'>
                <Avatar src={icon} />
                <Typography.Title className='logo' level={2}>
                    <Link to="/">Cryptoverse</Link>
                </Typography.Title>
                <Button className='menu-control-container'></Button>
            </div>
            <Menu theme='dark'>
                <Menu.Item icon={<HomeOutlined />}>
                    <Link to="/">Home</Link>
                </Menu.Item>
                <Menu.Item icon={<FundOutlined />}>
                    <Link to="/cryptocurrencies">Cryptocurrencies</Link>
                </Menu.Item>
                <Menu.Item icon={<MoneyCollectOutlined />}>
                    <Link to="/exchanges">Exchanges</Link>
                </Menu.Item>
                <Menu.Item icon={<BulbOutlined />}>
                    <Link to="/news">News</Link>
                </Menu.Item>
            </Menu>
        </div>
    )
}

export default Navbar