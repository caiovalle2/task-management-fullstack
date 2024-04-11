'use client'
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { useState, useEffect } from 'react';
import { redirect } from "next/navigation";
import isAuthenticated from "@/utils/Auth"
import Menu from '../menu'
import Droppablearea from './components/handledragdrop'
import SearchBar from './components/searchbar';
import api_task from '../task/api'
import api_user from '../user/api'


export default function Home() {
  const [users, setusers] = useState([])
  const [tasks, settasks] = useState(null)
  const [tasksfiltered, settasksfiltered] = useState(null)
  const [isLoading, setisLoading] = useState(true)
  const [searchisLoading, setsearchisLoading] = useState(true)
  const [itemsSorted, setitemsSorted] = useState(null)


  useEffect(() => {
    if (!isAuthenticated()){
      redirect("/login")
    }
    api_task.get().then(data => {
      setisLoading(false)
      settasksfiltered(data)
      settasks(data)
      setitemsSorted([
        data.filter(data => data.status === "todo"),
        data.filter(data => data.status === "inprogress"),
        data.filter(data => data.status === "done")
      ])
    }).catch(e => {})

    api_user.get().then(data => {
      setusers(data)
      setsearchisLoading(false)
  })

  },[])

  return (
    <div className="h-screen flex">
      <Menu value='home'></Menu>
      <div className="w-5/6">
        <SearchBar users={users} tasks={tasks} settasksfiltered={settasksfiltered} isLoading={searchisLoading} setitemsSorted={setitemsSorted}></SearchBar>
        <div className='h-5/6 flex'>
          {isLoading || searchisLoading ? <div></div> : <DndProvider backend={HTML5Backend}>
            <div className='w-1/3 flex justify-center mx-2 pb-2'>
              <Droppablearea tasks={tasks} settasks={settasks} tasksfiltered={tasksfiltered} settasksfiltered={settasksfiltered} itemsSorted={itemsSorted} setitemsSorted={setitemsSorted} users={users} index={0}></Droppablearea>
            </div>
            <div className='w-1/3 flex justify-center mr-2 pb-2'>
              <Droppablearea tasks={tasks} settasks={settasks} tasksfiltered={tasksfiltered} settasksfiltered={settasksfiltered} itemsSorted={itemsSorted} setitemsSorted={setitemsSorted} users={users} index={1}></Droppablearea>
            </div>
            <div className='w-1/3 flex justify-center mr-2 pb-2'>
              <Droppablearea tasks={tasks} settasks={settasks} tasksfiltered={tasksfiltered} settasksfiltered={settasksfiltered} itemsSorted={itemsSorted} setitemsSorted={setitemsSorted} users={users} index={2}></Droppablearea>
            </div>
        </DndProvider>}
        </div>
      </div>
    </div>
  );
}