import cn from 'classnames';
import React from 'react';
import s from './Footer.module.scss';
import Container from '../Container/Container';
import Logo from '../Logo/Logo';

const Footer = React.memo(() => {
    return (
        <footer className={s.footer}>
            <Container>
                <Logo />
                <span>{new Date().getFullYear()}</span>
            </Container>
        </footer>
    );
});

export default Footer;
