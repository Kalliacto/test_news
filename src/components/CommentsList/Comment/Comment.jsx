import React from 'react';
import { dateAdjustment } from '../../../utils/utils';
import s from './Comment.module.scss';

const Comment = ({ comment }) => {
    return (
        <li className={s.comment}>
            <p className={s.comment__info}>Автор: {comment.by} </p>
            <p className={s.comment__info}>Дата публикации: {dateAdjustment(comment.time)}</p>

            <p className={s.comment__info}>
                <span>Комментарий: </span>
                <span className={s.comment__text}> "{comment.text}"</span>
            </p>
        </li>
    );
};

export default Comment;
