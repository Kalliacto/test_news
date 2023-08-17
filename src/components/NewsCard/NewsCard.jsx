import React from 'react';
import { Link } from 'react-router-dom';

const NewsCard = (elem) => {
    // console.log(elem);
    return (
        <li>
            <Link to={`/news/${elem.id}`}>{elem.id}</Link>
            <p>{elem.by}</p>
        </li>
    );
};

export default NewsCard;
