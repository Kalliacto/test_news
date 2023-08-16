import './App.css';
import React, { useEffect, useState } from 'react';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import { getNews, getNewsOne } from './utils/api';

function App() {
    const [newsIds, setNewsIds] = useState([]);
    const [oneNews, setOneNews] = useState({});

    useEffect(() => {
        if (newsIds.length !== 0) {
            setTimeout(() => {
                getNews().then((ids) => setNewsIds(ids.slice(0, 100)));
            }, 60000);
        }

        getNews().then((ids) => setNewsIds(ids.slice(0, 100)));
    }, []);

    console.log(newsIds);

    console.log(oneNews);

    return (
        <div className='App'>
            <Header />
            <Main />
            <button onClick={() => getNewsOne(newsIds[58]).then((news) => setOneNews(news))}>
                Click me!
            </button>
            <Footer />
        </div>
    );
}

export default App;
