import React, { useState } from 'react';
import { Select, Typography as Tp, Row, Col, Avatar, Card } from 'antd';
import moment from 'moment';

import { useGetCryptosQuery } from "../services/cryptoApi";
import { useGetCryptoNewsQuery } from '../services/cryptoNewsApi';
import Loader from './Loader';

const demoImage = 'https://www.bing.com/th?id=OVFT.mpzuVZnv8dwIMRfQGPbOPC&pid=News';

const { Option } = Select;

const News = ({ simplified }) => {
    const [newsCategory, setNewsCategory] = useState('Cryptocurrency');
    const { data:cryptoNews } = useGetCryptoNewsQuery({ newsCategory, count: simplified ? 6 : 12 });
    const { data } = useGetCryptosQuery(100);

    if(!cryptoNews?.value) return <Loader />;

    return (
        <>
            <Row gutter={[24, 24]}>
                {!simplified && (
                    <Col span={24}>
                        <Select
                            showSearch
                            className="select-news"
                            placeholder="Select a Crypto"
                            optionFilterProp="children"
                            onChange={(value) => setNewsCategory(value)}
                            filterOption={(input, option) => option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
                        >
                            <Option value="Cryptocurrency">
                                Cryptocurrency
                            </Option>

                            {data?.data?.coins.map((coin) => (
                                <Option value={coin.name}>
                                    {coin.name}
                                </Option>
                            ))};
                        </Select>
                    </Col>
                )}
                {cryptoNews.value.map((news, i) => (
                    <Col xs={24} sm={12} lg={8} key={i}>
                        <Card hoverable className="news-card">
                            <a href={news.url} target="_blank" rel="norefferer">
                                <div className="news-image-container">
                                    <Tp.Title className="news-title" level={4}>
                                        {news.name}
                                    </Tp.Title>

                                    <img style={{ maxWidth: '200px', maxHeight: '100px', borderRadius: '3px' }} src={news?.image?.thumbnail?.contentUrl || demoImage} alt="news"/>
                                </div>
                                
                                <p>
                                    {news.description > 100 
                                        ? `${news.description.substring(0, 100)} ... `
                                        : news.description }
                                </p>
                                
                                <div className="provider-container">
                                    <div>
                                        <Avatar src={news.provider[0]?.image?.thumbnail?.contentUrl || demoImage} alt="news" />
                                        <Tp.Text className="provider-name">
                                            {news.provider[0]?.name}
                                        </Tp.Text>
                                    </div>
                                    
                                    <Tp.Text>
                                        {moment(news.datePublished).startOf('ss').fromNow()}
                                    </Tp.Text>
                                </div>
                            </a>
                        </Card>
                    </Col>
                ))}
            </Row>
        </>
    )
}

export default News
