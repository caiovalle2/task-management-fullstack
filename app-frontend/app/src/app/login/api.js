import axios from 'axios';

const base_url = process.env.NEXT_PUBLIC_API_URL
const login_url = base_url + "login"
const logout_url = base_url + "logout"

axios.defaults.withCredentials = true

const api = {
  login: async (userData) => {
    try {
      const response = await axios.post(login_url, userData);
      return response.data;
    } catch (error) {
      throw error;
  
    }
  },
  logout: async () => {
    try {
      const response = await axios.post(logout_url, null, {headers: {'X-CSRFToken': document.cookie.split('=')[1]}});
  
    } catch (error) {
      throw error;
  
    }
  }
}

export default api;



