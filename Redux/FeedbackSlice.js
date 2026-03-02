import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    selectedDate: '',
};

const dateSlice = createSlice({
    name: 'date',
    initialState,
    reducers: {
        setDate: (state, action) => {
            state.selectedDate = action.payload
        },
    },
});

export const { setDate } = dateSlice.actions
export default dateSlice.reducer