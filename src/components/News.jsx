import React from 'react';
import { Typography, Select, Row, Col, Avatar, Card } from 'antd';
import moment from 'moment';

import { useGetCryptoNewsQuery } from '../services/cyptoNewsApi';

const { Text, Title } = Typography;
const { Option } = Select;

const News = ({ simplified }) => {
    const { data: cryptoNews } = useGetCryptoNewsQuery({
        newsCategory: 'Cryptocurrency',
    });

    return <div>News</div>;
};

export default News;
