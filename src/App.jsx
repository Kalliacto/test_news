import './App.css';
import React, { useEffect } from 'react';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import { useDispatch } from 'react-redux';
import { getAllNews } from './storage/slices/newsSlice';

function App() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllNews());

        setInterval(() => {
            dispatch(getAllNews());
        }, 60000);
    }, [dispatch]);

    return (
        <div className='App'>
            <Header />
            <Main />
            <Footer />
        </div>
    );
}

export default App;
