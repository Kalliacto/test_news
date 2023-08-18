import React from 'react';
import s from './Logo.module.scss';
import { ReactComponent as LogoSvg } from '../../assets/img/logo.svg';

const Logo = () => {
    return <LogoSvg className={s.logo} />;
};

export default Logo;
