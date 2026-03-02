import { configureStore } from '@reduxjs/toolkit';
import roleReducer from './Slice'
import dateReducer from './FeedbackSlice'

const store = configureStore({
    reducer: {
        role: roleReducer,
        date: dateReducer,
    },
});

export default store;
