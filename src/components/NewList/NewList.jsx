import React from 'react';
import s from './NewList.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { getAllNews } from '../../storage/slices/newsSlice';
import NewsCard from '../NewsCard/NewsCard';

const NewList = () => {
    const { newsList } = useSelector((s) => s.news);
    const dispatch = useDispatch();

    const handlerUpdate = () => {
        dispatch(getAllNews());
    };

    return (
        <>
            <div>
                <button onClick={handlerUpdate}>Update</button>
                <ul>
                    {newsList.map((elem, i) => {
                        return <NewsCard key={i} {...elem} />;
                    })}
                </ul>
            </div>
        </>
    );
};

export default NewList;
