import { createSlice } from '@reduxjs/toolkit'

const userJson = localStorage.getItem('user')

const initialState = {
    user: JSON.parse(userJson),
}

const userSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {
    setUserAction: (state, action) => {
      state.user = action.payload;
    }
  }
});

export const {setUserAction} = userSlice.actions

export default userSlice.reducer