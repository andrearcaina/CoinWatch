import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { Layout, Typography as Tp, Space } from 'antd';

import { Navbar, Homepage, Cryptocurrencies, CryptoDetails, News } from './components';
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
                            <Route exact path="/" element={<Homepage />}/>
                            <Route exact path="/cryptocurrencies" element={<Cryptocurrencies />}/>
                            <Route exact path="/cryptocurrencies/:coinId" element={<CryptoDetails />}/>
                            <Route exact path="/news" element={<News />}/>
                        </Routes>
                    </div>
                </Layout>
                <div className="footer">
                    <Tp.Title level={5} style={{color:'white', textAlign:'center'}}>
                        CoinWatch<br/>
                        by 🫠<a href="https://github.com/andrearcaina" target="_blank" rel="noreferrer" style={{color:"#A5C9CA"}}>andrearcaina</a>
                    </Tp.Title>
                    <Space>
                        <Link to="/">Home</Link>
                        <Link to="https://www.linkedin.com/in/andre-arcaina/" target="_blank">LinkedIn</Link>
                        <Link to="https://github.com/andrearcaina" target="_blank">GitHub</Link>
                    </Space>
                </div>
            </div>
        </div>
    )
}

export default App
