import { useState } from 'react'

import './App.css'
import SideBar from './components/SideBar.jsx'
import Header from "./components/Header.jsx";
import MoreIcon from './assets/Icons/more.svg?react'
import AddIcon from './assets/Icons/add.svg?react'

function App() {

    const [theme, setTheme] = useState("Dark")
        const [showSideBar, setShowSideBar] = useState(true)
    const toggleTheme = () => {
        setTheme(theme === "Dark" ? "Light" : "Dark")
    }
    const user = "Matias"


  return (
    <>

        


        { /*
        <main className={`font-[Inter] flex min-h-screen overflow-x-hidden ${theme === 'Dark' ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'} transition-all duration-700 ease-in-out `}>
            <SideBar theme={theme} user={user} show={showSideBar}/>
            <div className={`flex flex-col w-full mt-4 ml-7 gap-4`}>
                <button onClick={() => setShowSideBar(!showSideBar)}
                        className={`absolute top-1/2 -translate-y-1/2 z-50 p-2 rounded-lg transition-all duration-700 ease-in-out
                        ${showSideBar ? 'left-[17.5rem]' : 'left-2'}
                        ${theme === 'Dark' ? 'bg-gray-700 text-white' : 'bg-gray-200 text-gray-800'} hover:bg-purple-700 hover:text-white`}
                >
                    <MoreIcon />
                </button>
                <Header theme={theme} toggleTheme={toggleTheme}/>
                <div className={`flex items-center justify-between` }>
                    <span className={`text-4xl font-bold h-min`}>Good Morning, {user}</span>
                    <button className={`flex items-center gap-2 p-2 rounded-lg mt-4 transition-all duration-700 ease-in-out mr-8 hover:bg-purple-700 hover:translate-x-1 hover:shadow-md ${theme === "Dark" ? "bg-gray-700" : "bg-gray-200"}`}>
                        <AddIcon />
                        <span>Add Task</span>
                    </button>
                </div>
            </div>
        </main>
        */ }
    </>
  )
}

export default App;
