import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    isLoading: false, // mặc định là true
}
// isLoading: true là để cho loading hiển thị khi mà chưa có dữ liệu trả về từ api
// khi có dữ liệu trả về từ api thì sẽ set isLoading = false để ẩn loading đi
// isLoading: false là để cho loading ẩn đi khi mà có dữ liệu trả về từ api

const loadingSlice = createSlice({
  name: 'loadingSlice',
  initialState,
  reducers: {
    showLoading: (state) => {
      state.isLoading = true
    },
    hideLoading: (state) => {
      state.isLoading = false
    },
  }
});

export const { showLoading, hideLoading } = loadingSlice.actions

export default loadingSlice.reducer