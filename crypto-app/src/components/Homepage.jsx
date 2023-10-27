import React from 'react';
import millify from 'millify';
import { Typography as Tp, Row, Col, Statistic as Stat } from 'antd';
import { Link } from 'react-router-dom';

import { useGetCryptosQuery } from '../services/cryptoApi';

import Cryptocurrencies from './Cryptocurrencies';
import News from './News';
import Loader from './Loader';

const Homepage = () => {
    const { data, isFetching } = useGetCryptosQuery(10);
    const globalStats = data?.data?.stats;

    if(isFetching) return <Loader/>;

    return (
        <>
            <Tp.Title level ={2} className="heading"> Global Crypto Stats </Tp.Title>
            
            <Row gutter={[32, 32]}>
                <Col span={12}><Stat title="Total Cryptocurrencies" value={globalStats.total} /></Col>
                <Col span={12}><Stat title="Total Exchanges" value={millify(globalStats.totalExchanges)} /></Col>
                <Col span={12}><Stat title="Total Market Cap" value={millify(globalStats.totalMarketCap)} /></Col>
                <Col span={12}><Stat title="Total 24h Volume" value={millify(globalStats.total24hVolume)} /></Col>
                <Col span={12}><Stat title="Total Markets" value={millify(globalStats.totalMarkets)} /></Col>
            </Row>
            
            <div className="home-heading-container">
                <Tp.Title level={2} className="home-title">Top 10 Cryptocurrencies In The World</Tp.Title>
                <Tp.Title level={3} className="show-more"><Link to="/cryptocurrencies">Show more</Link></Tp.Title>
            </div>
            
            <Cryptocurrencies simplified />
            
            <div className="home-heading-container">
                <Tp.Title level={2} className="home-title">Latest Cryptocurrency News</Tp.Title>
                <Tp.Title level={3}><Link to="/news">Show more</Link></Tp.Title>
            </div>
            
            <News simplified />
        </>
    )
}

export default Homepage
