import React, { useEffect } from 'react';
import s from './NewsPageView.module.scss';
import BtnBackToHome from '../../components/BtnBackToHome/BtnBackToHome';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getOneNews } from '../../storage/slices/newsSlice';

const NewsPageView = (props) => {
    const { id } = useParams();

    //Получение одной новости по айди для страницы просмотра одной новости
    const { oneNews } = useSelector((s) => s.news);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getOneNews(id));
    }, [id, dispatch]);

    console.log(oneNews);

    return (
        <div>
            Я детальная новость!
            <BtnBackToHome />
        </div>
    );
};

export default NewsPageView;
