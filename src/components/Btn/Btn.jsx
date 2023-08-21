import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import s from './Btn.module.scss';

const Btn = ({ title }) => {
    const navigate = useNavigate();
    const goBack = () => {
        navigate(-1);
    };

    return (
        <>
            <button onClick={goBack} className={s.btn}>
                {title}
            </button>
        </>
    );
};

export default Btn;
