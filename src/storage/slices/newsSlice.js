import { createAsyncThunk, createSlice, isPending } from '@reduxjs/toolkit';
import { getNews, getNewsOne } from '../../utils/api';

const initialState = {
    newsList: [],
    isLoading: false,
    oneNews: {},
};

export const getAllNews = createAsyncThunk(
    'allNews/getAllNews',
    async (_, { fulfillWithValue, rejectWithValue }) => {
        try {
            const allNewsIds = await getNews().then((res) => res.slice(400, 500));
            const newsList = await Promise.allSettled(allNewsIds.map((i) => getNewsOne(i)));

            return fulfillWithValue(newsList);
        } catch (error) {
            return rejectWithValue(error);
        }
    }
);

export const getOneNews = createAsyncThunk(
    'oneNews/getOneNews',
    async (idNews, { fulfillWithValue, rejectWithValue }) => {
        try {
            const oneNews = await getNewsOne(idNews);
            return fulfillWithValue(oneNews);
        } catch (error) {
            return rejectWithValue(error);
        }
    }
);

const newsSlice = createSlice({
    name: 'newsSlice',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getAllNews.fulfilled, (state, action) => {
            state.isLoading = false;
            state.newsList = action.payload.reduce((acc, el) => {
                if (el.status === 'fulfilled') {
                    acc.push(el.value);
                    return acc;
                } else {
                    return acc;
                }
            }, []);
        });
        builder.addCase(getOneNews.fulfilled, (state, action) => {
            state.isLoading = false;
            state.oneNews = action.payload;
        });
        builder.addMatcher(isPending(getAllNews, getOneNews), (state) => {
            state.isLoading = true;
        });
    },
});

export default newsSlice.reducer;
