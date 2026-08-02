import SearchIcon from '../assets/Icons/search.svg?react';
import NotificationIcon from '../assets/Icons/notifications.svg?react';
import DarkModeIcon from '../assets/Icons/darkMode.svg?react';
import LightModeIcon from '../assets/Icons/lightMode.svg?react';

function Header({theme, toggleTheme}) {
    const iconColorClass = theme === "Dark" ? "text-white" : "text-gray-800";
    const ThemeIcon = theme === "Dark" ? LightModeIcon : DarkModeIcon;


    return (
        <>
            <div className={`flex justify-between gap-12 h-14 transition-all duration-700 ease-in-out ${theme === "Dark" ? "bg-gray-800 text-white" : "bg-white text-gray-800"}`}>
                <div className={`flex flex-1 max-w-1/2 min-w-1/4 items-center gap-2 border-2 rounded-lg p-2 w-140 transition-all duration-700 ease-in-out ${theme === "Dark" ? "bg-gray-700 border-gray-600" : "bg-gray-200 border-gray-300"}`}>
                    <button className="flex" onClick={() => {}} type="button">
                        <SearchIcon className={`h-8 w-8 transition-all duration-700 ease-in-out ${iconColorClass}`}/>
                    </button>
                    <input type="text" placeholder="Search..." className={`p-2 w-full bg-transparent outline-none rounded-lg ${theme === "Dark" ? "placeholder:text-gray-300" : "placeholder:text-gray-500"}`}/>
                </div>
                <div className={`flex gap-4 items-center transition-all duration-700 ease-in-out ${theme === "Dark" ? "bg-gray-800" : "bg-white"}`}>
                    <button type="button">
                        <NotificationIcon className={`h-8 w-8 transition-all duration-700 ease-in-out ${iconColorClass}`}/>
                    </button>
                    <button onClick={toggleTheme} type="button" className={`flex items-center mr-8 justify-center rounded-lg p-2 transition-all duration-700 ease-in-out`}>
                        <ThemeIcon className={`h-8 w-8 transition-all duration-700 ease-in-out ${iconColorClass}`}/>
                    </button>
                </div>
            </div>
        </>
    )
}

export default Header;