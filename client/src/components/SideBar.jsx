import LogoDark from '../assets/LogoDark.png'
import LogoLight from '../assets/LogoLight.png'
import DashboardIcon from '../assets/Icons/dashboard.svg?react'
import TasksIcon from '../assets/Icons/tasks.svg?react'
import CategoryIcon from '../assets/Icons/category.svg?react'
import CalendarIcon from '../assets/Icons/calendar.svg?react'
import StatsIcon from '../assets/Icons/stats.svg?react'
import SettingsIcon from '../assets/Icons/settings.svg?react'
import ProfileIcon from '../assets/Icons/profile.svg?react'
import DropDownIcon from '../assets/Icons/dropDown.svg?react'
import { useTheme } from '../context/ThemeContext.jsx'

function SideBar({ user, show }) {
    const { theme } = useTheme()
    const menuItems = [
        { name: 'Dashboard', icon: DashboardIcon },
        { name: 'Tasks', icon: TasksIcon },
        { name: 'Categories', icon: CategoryIcon },
        { name: 'Calendar', icon: CalendarIcon },
        { name: 'Statistics', icon: StatsIcon },
        { name: 'Settings', icon: SettingsIcon },
    ]

    const iconColorClass = theme === 'Dark' ? 'text-white' : 'text-gray-800'

    return (
        <aside
            className={`h-screen shrink-0 overflow-hidden transition-all duration-700 ease-in-out flex flex-col gap-8 border-r border-gray-400
            ${show ? 'w-70 p-4 sm:w-70' : 'w-0 p-0'} 
            ${theme === 'Dark' ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'} 
            `}>
            <div className="flex items-center justify-center">
                <img src={theme === 'Dark' ? LogoDark : LogoLight} alt="Logo" />
            </div>

            <div>
                <ul>
                    {menuItems.map((item, index) => {
                        const Icon = item.icon
                        return (
                            <li key={index} className={`flex items-center p-2 gap-2 rounded-lg transition-all duration-700 ease-in-out hover:bg-purple-700 hover:translate-x-1 hover:shadow-md `}>
                                <button type="button" className="flex items-center p-2 gap-2">
                                    <Icon className={`h-9 w-9 transition-all duration-700 ease-in-out ${iconColorClass}`}/>
                                    <span className="text-2xl">{item.name}</span>
                                </button>
                            </li>
                        )
                    })}
                </ul>
            </div>

            <div className="flex p-4 gap-4 items-center mt-auto">
                <button>
                    <ProfileIcon className={`h-12 w-12 transition-all duration-700 ease-in-out ${iconColorClass}`}/>
                </button>
                <span className="text-2xl">{user}</span>
                <button>
                    <DropDownIcon className={`h-12 w-12 transition-all duration-700 ease-in-out ${iconColorClass}`}/>
                </button>
            </div>
        </aside>
    )
}

export default SideBar