import React from 'react'
import { Routes, Route, Link } from 'react-router-dom';
import { Layout, Typography, Space } from 'antd';

import { Navbar, Homepage, Exchanges, Cryptocurrencies, CryptoDetails, News } from './components';
import './styles.css';

const App = () => {
    return (
        <div className="app">
            <div className="navbar">
                <Navbar />
            </div>
            
            <div className="main">
                <Layout>
                    <div className='routes'> 
                        <Routes>
                        <Route exact path="/" element={<Homepage/>}/>
                        <Route exact path="/cryptocurrencies" element={<Cryptocurrencies/>}/>
                        <Route exact path="/crypto/:coinId" element={<CryptoDetails/>}/>
                        <Route exact path="/news" element={<News/>}/>
                        </Routes>
                    </div>
                </Layout>
            </div>

            <div className="footer">
                <Typography.Title level={5} style={{color:'white', textAlign:'center'}}>
                    CryptoVest<br/>
                    by <a href="https://github.com/andrearcaina" target="_blank" rel="noreferrer" style={{color:"#A5C9CA"}}>andrearcaina</a>
                </Typography.Title>
                <Space>
                    <Link to="/">Home</Link>
                    <Link to="/exchanges">Exchanges</Link>
                    <Link to="/news">News</Link>
                </Space>
            </div>
        </div>
    )
}

export default App
