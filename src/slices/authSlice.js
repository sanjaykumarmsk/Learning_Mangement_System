import { createSlice } from "@reduxjs/toolkit"

let token = null

try {
  const rawToken = localStorage.getItem("token")
  if (rawToken) {
    token = JSON.parse(rawToken)
  }
} catch (error) {
  console.error("Error parsing token from localStorage:", error)
  // Optionally, clear the corrupted token from localStorage
  localStorage.removeItem("token")
}

const initialState = {
  signupData: null,
  loading: false,
  token: token,
}

const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    setSignupData(state, action) {
      state.signupData = action.payload
    },
    setLoading(state, action) {
      state.loading = action.payload
    },
    setToken(state, action) {
      state.token = action.payload
    },
  },
})

export const { setSignupData, setLoading, setToken } = authSlice.actions

export default authSlice.reducer
