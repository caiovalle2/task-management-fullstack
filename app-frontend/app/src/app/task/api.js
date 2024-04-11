import axios from 'axios';
import dotenv from 'dotenv'

dotenv.config()

const base_url = process.env.NEXT_PUBLIC_API_URL;
const task_url = base_url + "task/"

const options = {withCredentials: 'true'}

const api_task = {
    get: async () => {
      try {
        const response = await axios.get(task_url, options);
        return response.data;
      } catch (error) {
        throw error;
    
      }
    },
    create: async (taskData) => {
        try {
          const response = await axios.post(task_url, taskData, {...options, headers: {'X-CSRFToken': document.cookie.split('=')[1]}});
          console.log(response.data)
          return response.data;
        } catch (error) {
          throw error;
      
        }
    },
    patch: async (taskData) => {
        try {
          const {id} = taskData
          const response = await axios.patch(`${task_url}${id}/`, taskData, {...options, headers: {'X-CSRFToken': document.cookie.split('=')[1]}});
          return response.data;
        } catch (error) {
          throw error;
      
        }
    },
    delete: async (id) => {
      try{
        const response = await axios.delete(`${task_url}${id}/`, {...options, headers: {'X-CSRFToken': document.cookie.split('=')[1]}})
        return response
      } catch (error) {
        throw error
      }
    }
    
}

export default api_task;

