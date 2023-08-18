import React from 'react';
import { Link } from 'react-router-dom';
import s from './NewsCard.module.scss';
import { dateAdjustment } from '../../utils/utils';

const NewsCard = (elem) => {
    const { time, by, score } = elem;

    return (
        <li className={s.card}>
            <Link to={`/news/${elem.id}`}>
                <h6 className={s.card__title}>{elem.title}</h6>
            </Link>
            <div className={s.card__info}>
                <span>Рейтинг: {score}</span>
                <span>Автор: {by}</span>
                <span>Время: {dateAdjustment(time)}</span>
            </div>
        </li>
    );
};

export default NewsCard;
