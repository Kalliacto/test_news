import React, { useEffect } from 'react';
import s from './NewsPageView.module.scss';
import Btn from '../../components/Btn/Btn';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getOneNews } from '../../storage/slices/newsSlice';
import { dateAdjustment } from '../../utils/utils';
import Preloader from '../../components/Preloader/Preloader';

const NewsPageView = React.memo(() => {
    const { id } = useParams();
    const { oneNews, isLoading } = useSelector((s) => s.news);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getOneNews(id));
    }, [id, dispatch]);

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
                    <p>Комментариев: {oneNews.kids ? oneNews.kids.length : 0}</p>
                </article>
            )}
        </div>
    );
});

export default NewsPageView;
