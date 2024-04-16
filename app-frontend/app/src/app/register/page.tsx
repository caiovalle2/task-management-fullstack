'use client'
import { useState } from 'react';
import register from './api'
import { useRouter } from "next/navigation";

export default function Register() {
  const [msgerror, setmsgerror] = useState(null)
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    password2: ''
  });

  const router = useRouter()

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormData({
      username: '',
      password: '',
      password2: ''
    })

    if (formData.password !== formData.password2){
      setmsgerror("Please make sure the passwords entered in the 'Password' and 'Confirm Password' fields match.")
      return
    }

    register(formData).then(data => {
      router.push('/login')
    }).catch(e => {
      setmsgerror(e.response.data.detail)
    })
    
  };
    return (
      <div className="bg-gray-200 min-h-screen flex justify-center items-center">
        <div className="bg-green-500 w-1/4 flex justify-center rounded-3xl">
          <div className="py-20 w-3/4 text-center">
            <h1 className="text-2xl font-bold w-full h-1/4">Sign Up</h1>
            <form onSubmit={handleSubmit} className="w-full">
              {msgerror && <h1 className='text-red-500 text-xs'>{msgerror}</h1>} 
              <input className="border-2 border-gray-500 p-2 mb-5 w-full rounded-3xl" type="text" name="username" value={formData.username} onChange={handleChange} placeholder="Username" required/>
              <input className="border-2 border-gray-500 p-2 mb-5 w-full rounded-3xl" type="password" name="password" value={formData.password} onChange={handleChange} placeholder="Password" required/>
              <input className="border-2 border-gray-500 p-2 mb-5 w-full rounded-3xl" type="password" name="password2" value={formData.password2} onChange={handleChange} placeholder="Confirm Password" required/>
              <button type="submit" className="bg-white p-2 w-1/2 rounded-3xl">Register</button>
            </form>
        </div>
        </div>
      </div>
    );
  }
  