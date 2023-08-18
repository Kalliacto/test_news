import React from 'react';
import { Link } from 'react-router-dom';
import s from './Btn.module.scss';

const Btn = ({ title }) => {
    return (
        <>
            <Link to={'/'}>
                <button className={s.btn}>{title}</button>
            </Link>
        </>
    );
};

export default Btn;
