import cn from 'classnames';
import React from 'react';
import s from './Main.module.scss';
import Container from '../Container/Container';
import { Route, Routes } from 'react-router-dom';
import NotFoundPage from '../../pages/NotFoundPage/NotFoundPage';
import NewsPage from '../../pages/NewsPage/NewsPage';
import NewsPageView from '../../pages/NewsPageView/NewsPageView';

const Main = () => {
    return (
        <main>
            <Container>
                <Routes>
                    <Route index element={<NewsPage />}></Route>
                    <Route path='/news/:id' element={<NewsPageView />}></Route>
                    <Route
                        path='*'
                        element={<NotFoundPage title={'Простите, данная страница не найдена.'} />}
                    ></Route>
                </Routes>
            </Container>
        </main>
    );
};

export default Main;
