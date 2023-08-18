import React from 'react';
import s from './NotFoundPage.module.scss';
import nfp from '../../assets/img/NotFound.svg';
import Btn from '../../components/Btn/Btn';

const NotFoundPage = ({ title }) => {
    return (
        <>
            <div className={s.notFoundPage}>
                <img className={s.notFoundPage__img} src={nfp} alt='sad smile' />
                <h2 className={s.notFoundPage__title}>{title}</h2>
                <Btn title={'< Назад'} />
            </div>
        </>
    );
};

export default NotFoundPage;
