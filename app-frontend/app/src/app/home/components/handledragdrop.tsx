import { useState } from 'react';
import { useDrag, useDrop } from 'react-dnd';
import api_task from '../../task/api'

const ItemTypes = {
    CARD: 'card'
  }
const choices = ["todo", "inprogress", "done"]

  const Draggablecard = ({task, user_name, index, tasks, settasks, itemsSorted, setitemsSorted, tasksfiltered, settasksfiltered}) => {
    const [ishovered, setishovered] = useState(false)

    const [{ isDragging }, drag] = useDrag({
      type: ItemTypes.CARD,
      item: { type: ItemTypes.CARD, id: task.id },
      collect: (monitor) => ({
          isDragging: monitor.isDragging(),
      }),
    });
    const delete_task = () =>{
      api_task.patch({id: task.id, is_active: false}).then((res) => {
        const new_tasks = [...tasks].filter((obj) => obj.id != task.id)
        const new_tasks_filtered = [...tasksfiltered].filter((obj) => obj.id != task.id)

        settasks(new_tasks)
        settasksfiltered(new_tasks_filtered)
        setitemsSorted(itemsSorted.map((item, index) => (new_tasks_filtered.filter(obj => obj.status === choices[index] ))))
      }).catch(e => {})
    }

    const currentDate = new Date()
    const deadline = new Date(task.deadline)
    const remaingDays = Math.floor((deadline - currentDate)/(1000*60*60*24))
    
    return (
      <div onMouseEnter={() => {index===2 && setishovered(true)}} onMouseLeave={() => setishovered(false)} className='w-2/5 h-1/4 text-white inline-block m-2 relative' style={{ opacity: isDragging ? 0 : 1}}>
        {index === 2 && ishovered && <a onClick={delete_task} className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-red-500 text-2xl font-bold z-10 cursor-pointer'>X</a>}
        <div ref={drag} className='w-full h-full rounded-2xl p-2' style={{ opacity: ishovered ? 0.5 : 1, background: remaingDays > 0 ? '#808080' : remaingDays == 0 ? 'black' : '#1C1C1C' }}>
          <div className='flex justify-between border-b-2 mb-2'><h1>{task.title}</h1><h1>{user_name}</h1></div>
          <h1 className='w-full h-1/2 text-start'>{task.description}</h1>
          <h1 className='text-end'>{task.deadline}</h1>
        </div>
      </div>
    )
  }

  export default function Droppablearea({tasks, settasks, tasksfiltered, settasksfiltered, itemsSorted, setitemsSorted, users, index}) {
    const titles = ["To Do", "In Progress", "Done"]
    const [, drop] = useDrop({
      accept: ItemTypes.CARD,
      drop: (item) => {
        const new_status = choices[index]
        const updatedTasks = [...tasks];
        const updatedTasksFiltered = [...tasksfiltered];

        const obj = updatedTasks.find(obj => obj.id === item.id)
        const obj2 = updatedTasksFiltered.find(obj => obj.id === item.id)

        if (obj.status != choices[2] && obj.status !== new_status) {
          
          api_task.patch({status: new_status, id: obj.id}).then(res => {
            obj.status = new_status
            obj2.status = new_status
            settasks(updatedTasks);
            settasksfiltered(updatedTasksFiltered)
            setitemsSorted(itemsSorted.map((item, index) => (tasksfiltered.filter(obj => obj.status === choices[index] ))))
          }).catch(e => {})
          
        }
      },
    });
    return (
      <div ref={drop} className='bg-gray-100 w-full rounded-2xl p-5'>
        <h1 className='text-3xl text-black font-bold w-full border-b-2 border-black pb-2 mb-10'>{titles[index] + ":"}</h1>
        <div className="h-4/5 text-center overflow-y-auto break-words">
          {itemsSorted[index].map((item, id) => (
            <Draggablecard key={id} task={item} user_name={users.find(obj => obj.id == item.assigned_to).name} index={index} tasks={tasks} settasks={settasks} itemsSorted={itemsSorted} setitemsSorted={setitemsSorted} tasksfiltered={tasksfiltered} settasksfiltered={settasksfiltered}>
            </Draggablecard>
          ))}
          
        </div>
      </div>
    )
  }