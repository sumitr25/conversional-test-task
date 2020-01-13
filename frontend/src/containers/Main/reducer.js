import { createSlice } from '@reduxjs/toolkit'

const configSlice = createSlice({
  name: 'config',
  initialState: {
    error: null,
    loading: false,
  },
  reducers: {
    getConfig(state, action) {
      state.loading = true;
    },
    successInGettingConfig(state, action) {
      state[action.payload.path] = action.payload.data;
      state.loading = false;
    },
    errorInGettingConfig(state, action) {
      state.error = action.payload;
      state.loading = false;
    }
  }
})
// Extract the action creators object and the reducer
const { actions, reducer } = configSlice;
// Extract and export each action creator by name
export const { getConfig, successInGettingConfig, errorInGettingConfig } = actions;
// Export the reducer, either as a default or named export
export default reducer;
