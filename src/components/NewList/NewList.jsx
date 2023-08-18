import React from 'react';
import s from './NewList.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { getAllNews } from '../../storage/slices/newsSlice';
import NewsCard from '../NewsCard/NewsCard';
import Preloader from '../Preloader/Preloader';

const NewList = () => {
    const { newsList } = useSelector((s) => s.news);
    const dispatch = useDispatch();

    const handlerUpdate = () => {
        dispatch(getAllNews());
    };

    return (
        <>
            <div className={s.newsList}>
                <button className={s.newsList__btn} onClick={handlerUpdate}>
                    &#8634; Обновить список
                </button>

                {!!newsList.length ? (
                    <ul className={s.newsList__list}>
                        {newsList.map((elem) => {
                            return <NewsCard key={elem.id} {...elem} />;
                        })}
                    </ul>
                ) : (
                    <Preloader />
                )}
            </div>
        </>
    );
};

export default NewList;
