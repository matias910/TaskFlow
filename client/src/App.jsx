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
        <div className={`flex min-h-screen overflow-x-hidden font-[Inter] transition-colors duration-900 ease-in-out ${
            theme === 'Dark' ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-800'
        }`}>
            <SideBar theme={theme} user={user} show={showSideBar} />

            <div className="flex min-w-0 flex-1 flex-col p-4 space-y-6 transition-all duration-900 sm:p-6">
                <div className="flex gap-4 border-b pb-4 max-h-20 sm:flex-row sm:items-center">
                    <button
                        onClick={() => setShowSideBar(!showSideBar)}
                        className={` p-2.5 rounded-lg transition-all duration-900 hover:bg-purple-700 hover:text-white ${
                            theme === 'Dark' ? 'bg-gray-700 text-white' : 'bg-gray-200 text-gray-800'
                        }`}
                        title="Toggle Sidebar"
                    >
                        <MoreIcon className="w-6 h-6" />
                    </button>

                    <div className="min-w-0 flex-1">
                        <Header theme={theme} toggleTheme={toggleTheme} show/>
                    </div>
                </div>

                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                        <h1 className="text-3xl font-bold tracking-tight">Good Morning, {user} 👋</h1>
                        <p className={`mt-1 text-sm ${theme === 'Dark' ? 'text-gray-400' : 'text-gray-500'}`}>
                            Here's an overview of your tasks for today.
                        </p>
                    </div>

                    <button
                        className={`flex shrink-0 items-center gap-2 self-start whitespace-nowrap rounded-lg px-4 py-2.5 font-medium shadow-sm transition-all duration-900 hover:bg-purple-700 hover:text-white hover:translate-x-1 ${
                            theme === "Dark" ? "bg-gray-600 text-white" : "bg-gray-200"
                        }`}
                    >
                        <AddIcon className="w-5 h-5" />
                        <span>Add Task</span>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default App;