import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { error } from "notifications/notiflixInit";

axios.defaults.baseURL = "https://contacts-book-backend-38as.onrender.com";

const setAuthHeader = (token) => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = "";
};

const notifyError = (message) => {
  error(message);
};

export const register = createAsyncThunk(
  "auth/register",
  async (credentials, thunkApi) => {
    try {
      const { data } = await axios.post("users/signup", credentials);

      setAuthHeader(data.token);
      return data;
    } catch (error) {
      notifyError(error.response.data.message);
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const login = createAsyncThunk(
  "auth/login",
  async (credentials, thunkApi) => {
    try {
      const { data } = await axios.post("users/login", credentials);

      setAuthHeader(data.token);
      return data;
    } catch (error) {
      notifyError(error.response.data.message);
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const logOut = createAsyncThunk("auth/logout", async (_, thunkApi) => {
  try {
    const { data } = await axios.post("users/logout");
    clearAuthHeader();
    return data;
  } catch ({ message }) {
    return thunkApi.rejectWithValue(message);
  }
});

export const refresh = createAsyncThunk("auth/refresh", async (_, thunkApi) => {
  const { token } = thunkApi.getState().auth;

  if (!token) return thunkApi.rejectWithValue("No token");

  setAuthHeader(token);

  try {
    const { data } = await axios.get("users/current");
    return data;
  } catch ({ message }) {
    return thunkApi.rejectWithValue(message);
  }
});

export const changeAvatar = createAsyncThunk(
  "contacts/updateAvatar",
  async (avatar, thunkAPI) => {
    const formData = new FormData();
    formData.append("avatar", avatar);

    try {
      const { data } = await axios.patch("users/updateAvatar", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      return data.avatarURL;
    } catch (error) {
      notifyError(error.response.data.message);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const updateUserName = createAsyncThunk(
  "contacts/updateName",
  async (name, thunkAPI) => {
    try {
      const { data } = await axios.patch("users/updateName", { name });
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
