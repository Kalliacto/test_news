import { createAsyncThunk, createSlice, isPending } from '@reduxjs/toolkit';
import { getComment, getNewsOne } from '../../utils/api';

const initialState = {
    commentsList: [],
    isLoading: false,
    oneNews: {},
};

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

export const getComments = createAsyncThunk(
    'comments/getComments',
    async (idKids, { fulfillWithValue, rejectWithValue }) => {
        try {
            const comments = await Promise.allSettled(idKids.map((i) => getComment(i)));
            return fulfillWithValue(comments);
        } catch (error) {
            return rejectWithValue(error);
        }
    }
);

const oneNewsSlice = createSlice({
    name: 'oneNewsSlice',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getComments.fulfilled, (state, action) => {
            state.isLoading = false;
            state.commentsList = action.payload.reduce((acc, el) => {
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
        builder.addMatcher(isPending(getOneNews), (state) => {
            state.isLoading = true;
        });
    },
});

export default oneNewsSlice.reducer;
