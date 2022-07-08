import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    isLoading: true
}

const LoaddingReducer = createSlice({
    name: 'loaddingReducer',
    initialState,
    reducers: {
        showLoaddingReducer: (state) => {
            state.isLoading = true
        },
        hideLoaddingReducer: (state) => {
            state.isLoading = false
        }
    }
});

export const { } = LoaddingReducer.actions

export default LoaddingReducer.reducer

//action thunk
export const showLoadding = () => ({
    type: 'loaddingReducer/showLoaddingReducer'
})

export const hideLoadding = () => ({
    type: 'loaddingReducer/hideLoaddingReducer'
})