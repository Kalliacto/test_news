import { configureStore } from '@reduxjs/toolkit';
import newsSlice from './slices/newsSlice';
import oneNewsSlice from './slices/oneNewsSlice';

const store = configureStore({
    reducer: {
        news: newsSlice,
        oneNews: oneNewsSlice,
    },
});

export default store;
