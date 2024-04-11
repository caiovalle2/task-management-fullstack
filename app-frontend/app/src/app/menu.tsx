'use client'
import { useRouter } from "next/navigation";
import api from './login/api'

export default function Menu(props) {
    const item_css = "py-5 rounded-l-3xl"
    const active_css = "bg-green-500 py-5 rounded-l-3xl"
    const router = useRouter()
    const logout = () =>{
      api.logout().then(() => {
      localStorage.clear()
      router.push('/login')
      })
    }
    return (
        <div className="pt-10 bg-gray-200 w-1/6 text-center border-r-4 border-green-500">
          <div className="ml-5">
            <a href="/home"><h1 className={props.value === 'home' ? active_css : item_css}>Home</h1></a>
            <a href="/task"><h1 className={props.value === 'task' ? active_css : item_css}>New Task</h1></a>
            <button onClick={logout} className={item_css}>Logout</button>
          </div>
        </div>
    );
}