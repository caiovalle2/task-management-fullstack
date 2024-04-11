'use client'
import { useState } from "react";
import api_task from './api'

export default function FormTask() {
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        deadline: '',
        user: ''
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
    api_task.create(formData)
    setFormData({
        title: '',
        description: '',
        deadline: '',
        user: ''
      })
    
    };

    return (
    <form onSubmit={handleSubmit} className='w-full h-1/4'>
        <div className='flex items-center mb-5'>
            <h1 className='w-1/4'>Task Name</h1>
            <input className="border-2 border-gray-500 flex-1" type="text" name="title" value={formData.title} onChange={handleChange}/>
        </div>
        <div className='flex items-center'>
            <h1 className='w-1/4'>Description</h1>
            <input className="border-2 border-gray-500 flex-1" type="description" name="description" value={formData.description} onChange={handleChange} placeholder='Limit 50' maxLength={50}/>
        </div>
        <div className='flex mt-5 items-center'>
            <h1 className='w-1/4'>Deadline</h1>
            <input className="border-2 border-gray-500 w-1/4 rounded-3xl" type="date" name="deadline" value={formData.deadline} onChange={handleChange}/>
        </div>
        <div className='text-right'><button type="submit" className='bg-white mt-10 w-1/3'>Create Task</button></div>
    </form>
    );
}