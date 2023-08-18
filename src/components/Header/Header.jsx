import cn from 'classnames';
import React from 'react';
import s from './Header.module.scss';
import Container from '../Container/Container';
import Logo from '../Logo/Logo';

const Header = React.memo(() => {
    return (
        <header className={s.header}>
            <Container>
                <Logo />
            </Container>
        </header>
    );
});

export default Header;
