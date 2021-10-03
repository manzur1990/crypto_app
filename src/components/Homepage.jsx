import React from 'react';
import { Row, Statistic, Col, Typography } from 'antd';
import milify from 'millify';
import { Link } from 'react-router-dom';
import { useGetCryptosQuery } from '../services/cryptoApi'

const { Title } = Typography;

const Homepage = () => {
    const { data, isFetching } = useGetCryptosQuery()

    console.log(data)

    const globalStats = data?.data?.stats

    if (isFetching) return 'Loading...'

    return (
        <>
            <Title level={2} className='heading'>
                Global Crypto Stats
            </Title>
            <Row>
                <Col span={12}>
                    <Statistic title='Total Cryptocurrencies' value={globalStats} />
                </Col>
                <Col span={12}>
                    <Statistic title='Total Exchanges' value={milify(globalStats.totalExchanges)} />
                </Col>
                <Col span={12}>
                    <Statistic title='Total Market Cap' value={milify(globalStats.totalMarketCap)} />
                </Col>
                <Col span={12}>
                    <Statistic title='Total 24 Hour Volume' value={milify(globalStats.total24hVolume)} />
                </Col>
                <Col span={12}>
                    <Statistic title='Total Markets' value={milify(globalStats.totalMarkets)} />
                </Col>
            </Row>

            <div className="home-heading-container">
                <Title level={2} className='home-title'>Top 10 Cryptocurrencies</Title>
                <Title level={3} className='show-more'><Link to='/cryptocurrencies'>Show More</Link></Title>
            </div>

            <Cryptocurrencies simplified />
            <div className="home-heading-container">
                <Title level={2} className='home-title'>Latest Crypto News</Title>
                <Title level={3} className='show-more'><Link to='/news'>Show More</Link></Title>
            </div>
            <News simplified />

        </>
    );
};

export default Homepage;
