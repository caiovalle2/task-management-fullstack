'use client'
import { useEffect } from 'react';
import { redirect } from "next/navigation";
import isAuthenticated from "@/utils/Auth"
import Menu from '../menu'
import FormTask from './form'
export default function Home() {
  useEffect(() => {
    if (!isAuthenticated()){
      redirect("/login")
    }
  }, [])
  
  return (
    <div className="h-screen flex">
      <Menu value='task'></Menu>
      <div className="w-4/5 flex justify-center items-center">
        <div className='bg-green-500 w-1/3 h-1/2 rounded-3xl px-10'>
          <h1 className='border-b-2 border-gray-500 w-full text-center text-4xl py-10 mb-10'>Create new Task</h1>
          <FormTask></FormTask>
        </div>
      </div>
    </div>
  );
}