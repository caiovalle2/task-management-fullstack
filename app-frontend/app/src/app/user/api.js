import axios from 'axios';
import dotenv from 'dotenv'

dotenv.config()

const base_url = process.env.NEXT_PUBLIC_API_URL;
const task_url = base_url + "users/"

const api_user = {
    get: async () => {
      try {
        const response = await axios.get(task_url, {withCredentials: 'true'});
        return response.data;
      } catch (error) {
        throw error;
    
      }
    },  
}

export default api_user;

