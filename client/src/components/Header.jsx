import SearchIcon from '../assets/Icons/search.svg?react';
import NotificationIcon from '../assets/Icons/notifications.svg?react';
import DarkModeIcon from '../assets/Icons/darkMode.svg?react';
import LightModeIcon from '../assets/Icons/lightMode.svg?react';
import { useTheme } from '../context/ThemeContext.jsx';

function Header() {
    const { theme, toggleTheme } = useTheme()
    const iconColorClass = theme === "Dark" ? "text-white" : "text-gray-800";
    const ThemeIcon = theme === "Dark" ? LightModeIcon : DarkModeIcon;

    return (
        <div className={`flex h-auto flex-col gap-3 transition-all duration-700 ease-in-out sm:h-14 sm:flex-row sm:items-center sm:justify-between`}>
            <div className={`flex min-w-0 max-w-200 flex-1 items-center gap-2 rounded-lg border-2 p-2 transition-all duration-700 ease-in-out ${
                theme === "Dark" ? "bg-gray-700 border-gray-600" : "bg-gray-200 border-gray-300"
            }`}>
                <button className="flex shrink-0" onClick={() => {}} type="button">
                    <SearchIcon className={`h-8 w-8 transition-all duration-700 ease-in-out ${iconColorClass}`} />
                </button>
                <input
                    type="text"
                    placeholder="Search..."
                    className={`w-full min-w-0 rounded-lg bg-transparent p-2 outline-none ${
                        theme === "Dark" ? "placeholder:text-gray-300" : "placeholder:text-gray-500"
                    }`}
                />
            </div>

            <div className={`flex flex-wrap items-center gap-3 transition-all duration-700 ease-in-out sm:gap-4`}>
                <button type="button" className="shrink-0">
                    <NotificationIcon className={`h-8 w-8 transition-all duration-700 ease-in-out ${iconColorClass}`} />
                </button>
                <button onClick={toggleTheme} type="button" className={`flex items-center justify-center rounded-lg p-2 transition-all duration-700 ease-in-out`}>
                    <ThemeIcon className={`h-8 w-8 transition-all duration-700 ease-in-out ${iconColorClass}`} />
                </button>
            </div>
        </div>
    )
}

export default Header;