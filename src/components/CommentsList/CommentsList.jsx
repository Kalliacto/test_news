import React from 'react';
import Comment from './Comment/Comment';
import s from './CommentsList.module.scss';

const CommentsList = ({ commentsList, commentInfo }) => {
    return (
        <div className={s.comments}>
            <p className={s.comments__info}>Комментариев: {commentInfo ? commentInfo.length : 0}</p>
            <ul>
                {commentsList.map((elem) => {
                    return <Comment key={elem.id} comment={elem} />;
                })}
            </ul>
        </div>
    );
};

export default CommentsList;
