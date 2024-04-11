import { useState } from "react"

export default function SearchBar({users, tasks, settasksfiltered, isLoading, setitemsSorted}) {
    const [options, setoptions] = useState([])
    const [searchquery, setsearchquery] = useState('')

    const handleinput = (event) => {
        const value = event.target.value
        setsearchquery(value)
        console.log(value, users)
        const options_filtered = value.length > 0 && !isLoading ? users.filter(option => option.name.toLowerCase().includes(value.toLowerCase())) : [];
        setoptions(options_filtered.slice(0,5))
    }

    const handleoption = option => {
        setsearchquery(option)
        setoptions([])
    }
    
    const filter = () => {
        const user = users.find(obj => obj.name === searchquery)
        const user_id = user ? user.id : null
        const data = searchquery && user_id ? tasks.filter(obj => obj.assigned_to == user_id) : tasks

        settasksfiltered(data)
        
        setitemsSorted([
            data.filter(data => data.status === "todo"),
            data.filter(data => data.status === "inprogress"),
            data.filter(data => data.status === "done")
          ])
    }
    return (
        <div className='w-full h-1/6 flex justify-center items-center'>
            <div className="w-1/3 border-2 mr-10 relative">
                <input className='w-full h-10' type='text' value={searchquery} onChange={handleinput}/>
                {options.length ? <ul className="bg-white w-full absolute border border-gray-200 mt-1">
                    {options.map((value, index) => (
                        <li className="p-2 cursor-pointer hover:bg-gray-200" key={index} onClick={() => handleoption(value.name)}>{value.name}</li>
                    ))}
                </ul> : <div></div>}
            </div>
            <button className='bg-green-500 h-10 px-10 rounded-2xl' onClick={filter}>Filter</button>
        </div>
    )
}