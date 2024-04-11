import axios from 'axios';
import dotenv from 'dotenv'

dotenv.config()

const base_url = process.env.NEXT_PUBLIC_API_URL
const register_url = base_url + "register"

const register = async (userData) => {
  try {
    const response = await axios.post(register_url, userData);
    return response.data;
  } catch (error) {
    throw error;

  }
}

export default register;

