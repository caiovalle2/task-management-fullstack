'use client'
import { useState } from 'react';
import register from './api'

export default function Register() {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    password2: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    register(formData)
    
  };
    return (
      <div className="bg-gray-200 min-h-screen flex justify-center items-center">
        <div className="bg-green-500 w-1/4 flex justify-center rounded-3xl">
          <div className="py-20 w-3/4 text-center">
            <h1 className="mb-10 text-2xl font-bold w-full">Sign Up</h1>
            <form onSubmit={handleSubmit} className="w-full">
              <input className="border-2 border-gray-500 p-2 mb-5 w-full rounded-3xl" type="text" name="username" value={formData.username} onChange={handleChange} placeholder="Username" required/>
              <input className="border-2 border-gray-500 p-2 mb-5 w-full rounded-3xl" type="text" name="password" value={formData.password} onChange={handleChange} placeholder="Password" required/>
              <input className="border-2 border-gray-500 p-2 mb-5 w-full rounded-3xl" type="text" name="password" value={formData.password} onChange={handleChange} placeholder="Confirm Password" required/>
              <button type="submit" className="bg-white p-2 w-1/2 rounded-3xl">Register</button>
            </form>
        </div>
        </div>
      </div>
    );
  }
  