import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  email: "",
  username: "",
  token: "",
  isAuthenticated: false,
  isLoading: false,
  error: "" as string | undefined,
};

export const login = createAsyncThunk(
  "user/login",
  async (data: { email: string; password: string }) => {
    // const response = await fetch("http://localhost:4000/login", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(data),
    // });
    // const res = await response.json();
    const res = {
        token: "token",
        email: "email",
        username: "username"
    }
    console.log(data)
    if (true) {
      localStorage.setItem("token", res.token);
      const expirationDate = new Date();
      expirationDate.setDate(expirationDate.getDate() + 7);
      localStorage.setItem("tokenExpiry", expirationDate.getTime().toString());
      return res;
    } else {
      throw new Error('error');
    }
  }
);

export const logout = createAsyncThunk("user/logout", async () => {
    localStorage.removeItem("token");
    localStorage.removeItem("tokenExpiry");
    return;
});

export const signup = createAsyncThunk(
  "user/signup",
  async (data: { email: string; username: string; password: string }) => {
    const response = await fetch("http://localhost:4000/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const res = await response.json();
    if (response.ok) {
      return res;
    } else {
      throw new Error(res.error);
    }
  }
);

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
  },
});

const reducer = userSlice.reducer;

export default reducer;
