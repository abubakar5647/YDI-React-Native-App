import { createSlice } from '@reduxjs/toolkit';

const Slice = createSlice({
    name: 'role',
    initialState: {
        role: null,
    },
    reducers: {
        setRole: (state, action) => {
            state.role = action.payload;
        },
    },
});

export const { setRole } = Slice.actions;

export default Slice.reducer;