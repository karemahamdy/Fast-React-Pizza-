import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  username: "k"
}

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    updateName (state , action) {
      state.username = action.payload
    }
  }
})


export const { updateName } = userSlice.actions;
export default userSlice.reducer;
