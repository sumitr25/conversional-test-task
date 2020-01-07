import { createSlice } from '@reduxjs/toolkit'

const dummySlice = createSlice({
  name: 'dummy',
  initialState: [],
  reducers: {
    createDummy(state, action) {},
    updateDummy(state, action) {},
    deleteDummy(state, action) {}
  }
})
// Extract the action creators object and the reducer
const { actions, reducer } = dummySlice
// Extract and export each action creator by name
export const { createDummy, updateDummy, deleteDummy } = actions
// Export the reducer, either as a default or named export
export default reducer
