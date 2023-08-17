import React from 'react';
import s from './NewsPage.module.scss';
import NewList from '../../components/NewList/NewList';

const NewsPage = (props) => {
    return (
        <div className={s.container}>
            <NewList />
        </div>
    );
};

export default NewsPage;
