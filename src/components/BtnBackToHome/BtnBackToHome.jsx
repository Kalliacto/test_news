import React from 'react';
import { Link } from 'react-router-dom';
import s from './BtnBackToHome.module.scss';

const BtnBackToHome = (props) => {
    return (
        <>
            <Link to={'/'}>
                <button className={s.btn__home}>На главную</button>
            </Link>
        </>
    );
};

export default BtnBackToHome;
