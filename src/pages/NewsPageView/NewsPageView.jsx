import React, { useEffect, useState } from 'react';
import s from './NewsPageView.module.scss';
import Btn from '../../components/Btn/Btn';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getComments, getOneNews } from '../../storage/slices/oneNewsSlice';
import { dateAdjustment } from '../../utils/utils';
import Preloader from '../../components/Preloader/Preloader';
import CommentsList from '../../components/CommentsList/CommentsList';

const NewsPageView = React.memo(() => {
    const { id } = useParams();
    const { oneNews, isLoading, commentsList } = useSelector((s) => s.oneNews);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getOneNews(id));
    }, [id, dispatch]);

    useEffect(() => {
        !!oneNews.kids &&
            dispatch(getComments(oneNews.kids)) &&
            setInterval(() => {
                dispatch(getComments(oneNews.kids));
            }, 60000);
    }, [oneNews.kids, dispatch]);

    return (
        <div className={s.card}>
            <Btn title={'<  Назад'} />
            {isLoading ? (
                <Preloader />
            ) : (
                <article className={s.card__info}>
                    <h6 className={s.card__title}>{oneNews.title}</h6>
                    <p>Автор: {oneNews.by}</p>
                    <p>Опубликовано: {dateAdjustment(oneNews.time)}</p>
                    <p>Рейтинг: {oneNews.score}</p>
                    {!!oneNews.text && <p>Текст: {oneNews.text}</p>}
                    {!!oneNews.url && (
                        <div>
                            Перейти к источнику &#8658; :{' '}
                            <a className={s.card__link} href={oneNews.url}>
                                {oneNews.url}
                            </a>
                        </div>
                    )}
                    {!!oneNews.kids ? (
                        <CommentsList commentsList={commentsList} commentInfo={oneNews.kids} />
                    ) : (
                        <p>Здесь пока нет ни одного комментария</p>
                    )}
                </article>
            )}
        </div>
    );
});

export default NewsPageView;
