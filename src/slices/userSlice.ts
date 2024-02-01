import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


const initialState = {
    email: "",
    username: "",
    token: "",
    isAuthenticated: false,
    isLoading: false,
    error: "",
};

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(login.pending, (state, action) => {
            state.isLoading = true;
        });
        builder.addCase(login.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isAuthenticated = true;
            state.email = action.payload.email;
            state.username = action.payload.username;
            state.token = action.payload.token;
        });
        builder.addCase(login.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.error.message;
        });
        builder.addCase(logout.pending, (state, action) => {
            state.isLoading = true;
        });
        builder.addCase(logout.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isAuthenticated = false;
            state.email = "";
            state.username = "";
            state.token = "";
        });
        builder.addCase(logout.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.error.message;
        });
        builder.addCase(signup.pending, (state, action) => {
            state.isLoading = true;
        });
        builder.addCase(signup.fulfilled, (state, action) => {
            state.isLoading = false;
        });
        builder.addCase(signup.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.error.message;
        });
    }
});

const reducer = userSlice.reducer;
export const { login, logout, signup } = userSlice.actions;

export default reducer;
