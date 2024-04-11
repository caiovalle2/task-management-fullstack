'use client'
import { useState, useEffect } from 'react';
import { useRouter, redirect } from "next/navigation";
import isAuthenticated from "@/utils/Auth"
import api from './api'

export default function Login() {
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });

  const router = useRouter()

  useEffect(() => {
    if (isAuthenticated()){
      redirect("/home")
    }
  }, [])

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
      password: ''
    })

    api.login(formData).then(data => {
      localStorage.setItem('user', JSON.stringify(data))
      router.push('/home')
    }).catch(e => {})
  };
  
  return (
    <div className="bg-gray-200 min-h-screen flex justify-center items-center">
      <div className="flex w-2/4">
        <div className="bg-green-500 w-1/2 flex justify-center rounded-l-3xl">
          <div className="py-40 w-3/4 text-center">
            <h1 className="mb-10 text-2xl font-bold w-full">Login</h1>
            <form onSubmit={handleSubmit} className="w-full">
              <input className="border-2 border-gray-500 p-2 mb-5 w-full rounded-3xl" type="text" name="username" value={formData.username} onChange={handleChange} placeholder="Username"/>
              <input className="border-2 border-gray-500 p-2 mb-5 w-full rounded-3xl" type="text" name="password" value={formData.password} onChange={handleChange} placeholder="Password"/>
              <button className="bg-white p-2 mb-5 w-1/2 rounded-3xl" type="submit">Login</button>
            </form>
            <div className="flex justify-center text-white">
              <h1 className="mr-1">Don't have an account?</h1>
              <a href="/register"><h1 className="">Register</h1></a>
            </div>
          </div>
        </div>
        <div className="bg-white w-1/2 rounded-r-3xl flex justify-center items-center">
          <div className="m-5">
            <h1 className="text-green-500 font-bold mb-4 text-2xl">Welcome to the website TodoList</h1>
            <p>Organize your daily tasks with ease using the ToDo List. Our intuitive application allows you
                to create, manage, and track your tasks efficiently, so you can achieve your goals with ease.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
  