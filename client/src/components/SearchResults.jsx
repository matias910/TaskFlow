import Circle from '../assets/Icons/circle.svg?react';
import MoreVertical from '../assets/Icons/morevertical.svg?react';
import { useTheme } from '../context/ThemeContext.jsx';
import { Tasks } from "../data/Tasks.js";
import { circleColor } from "../utils/IntensityColor.js";


function SearchResults({searchTerm}) {
    const { theme } = useTheme();
    const searchedTasks = Tasks.filter( task => task.title.toLowerCase().includes(searchTerm.toLowerCase()));

    return (
        <>
            {/* Backdrop */}
            <div className={`fixed inset-0 transition-opacity duration-700 pointer-events-none ${
                searchTerm ? 'opacity-50 bg-black' : 'opacity-0 pointer-events-none'
            }`} />

            {/* Modal */}
            <div className={`fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl mx-4 max-h-96 rounded-lg transition-all duration-700 ease-in-out z-50 ${
                searchTerm ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'
            } ${theme === 'Dark' ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'}`}>

                {searchedTasks.length === 0 ? (
                    <div className="p-8 text-center">
                        <p className={theme === 'Dark' ? 'text-gray-400' : 'text-gray-600'}>
                            No results found for "<span className="font-bold">{searchTerm}</span>".
                        </p>
                    </div>
                ):(
                    <ul className="flex flex-col gap-2 p-4 overflow-y-auto max-h-96">
                        {searchedTasks.map((item, index) => (
                            <li
                                key={index}
                                className={`grid grid-cols-[32px_minmax(0,1fr)_32px] items-center gap-3 px-4 py-3 sm:grid-cols-[32px_minmax(0,1fr)_120px_80px_minmax(70px,100px)_32px] rounded-lg transition-all hover:bg-purple-600/20 ${
                                    theme === 'Dark' ? 'bg-gray-700' : 'bg-gray-100'
                                }`}
                            >
                                <input type="checkbox" checked={false} readOnly />
                                <span className="min-w-0 truncate font-medium">{item.title}</span>
                                <span className="hidden justify-self-center rounded-full bg-purple-600 px-3 py-1 text-sm text-white sm:inline-flex">
                                    {item.category}
                                </span>
                                <span className="hidden sm:block">{item.time}</span>
                                <div className="hidden items-center gap-2 sm:flex">
                                    <Circle className={`h-3 w-3 ${circleColor(item.intensity)}`} />
                                    <span>{item.intensity}</span>
                                </div>
                                <button>
                                    <MoreVertical className="h-6 w-6 justify-self-end" />
                                </button>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </>
    )
}

export default SearchResults;