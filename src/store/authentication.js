import { createSlice } from "@reduxjs/toolkit"

const initialAuthState = {
  authentication: true
}


const authSlice = createSlice({
  name: "authentication",
  initialState: initialAuthState,
  reducers: {
    login(state) {
      state.authentication = true
     },
    logout(state) { 
      state.authentication = false
    }
  }
})

export const authActions = authSlice.actions;
export default authSlice.reducer;
