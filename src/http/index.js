import axios from "axios"

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  withCredentials: true,
  headers: {
    "Content-type": "application/json",
    Accept: "application/json",
  },
})

//this is the list of the all end points
export const sendOtp = data => api.post("/api/send-otp", data)
export const verifyOtp = data => api.post("/api/verify-otp", data)
export const activate = data => api.post("/api/activate", data)
export const logout = () => api.post("/api/logout")
export const createRoom = data => api.post("/api/rooms", data)
export const getAllRooms=()=>api.get('/api/rooms');
//interceptors
//ahiya aama 401 error aave matalab ke responese ma aa lagavyu che
api.interceptors.response.use(
  config => {
    return config
  },
  async error => {
    const originalRequest = error.config
    if (
      error.response.status === 401 &&
      originalRequest &&
      !originalRequest._isRetry
    ) {
      originalRequest.isRetry = true
      //jo aa biji vaar retry karse to accesstoken expire thai gyu hase aetle aenathi bachva ane loot ma na jay condition aena mate is retry true karyu che
      try {
        await axios.get(` `, {
          withCredentials: true,
        })
        return api.request(originalRequest)
      } catch (err) {
        console.log(err.message)
      }
    }
    throw error
  }
)
export default api
