import TotalTasks from '../assets/Icons/totaltasks.svg?react';
import Completed from '../assets/Icons/completed.svg?react';
import Overdue from '../assets/Icons/overdue.svg?react';
import Missed from '../assets/Icons/missedtask.svg?react';
import { useTheme } from '../context/ThemeContext.jsx'

function BigCard() {
    const { theme } = useTheme()

    const Cards = [
        { icon: TotalTasks, Category: 'Total Tasks', amount: '24', color: 'blue', progress: '+10' },
        { icon: Completed, Category: 'Completed', amount: '12', color: 'green', progress: '+5' },
        { icon: Overdue, Category: 'Overdue', amount: '6', color: 'red', progress: '-5' },
        { icon: Missed, Category: 'Missed', amount: '3', color: 'orange', progress: '-2' },
    ]

    return (
        <ul className="grid justify-items-center gap-4 grid-cols-[repeat(auto-fit,minmax(18rem,1fr))] transition-all duration-700 ease-in-out">
            {Cards.map((item, index) => {
                const Icon = item.icon
                return (
                    <li
                        key={index}
                        className={`flex h-31.5 w-full max-w-[20rem] items-center justify-between gap-4 rounded-xl px-10 py-3 transition-all duration-700 ease-in-out hover:translate-x-1 hover:shadow-md
                        ${theme === 'Dark' ? 'bg-gray-800 text-white' : 'bg-gray-300 text-gray-800'}`}
                    >
                        <div className={`flex items-center justify-center rounded-full p-2 transition-all duration-700 ease-in-out ${item.color === 'blue' ? 'bg-blue-500' : item.color === 'green' ? 'bg-green-500' : item.color === 'orange' ? 'bg-orange-500' : 'bg-red-500'}`}>
                            <Icon className={`h-12 w-12 transition-all duration-700 ease-in-out ${item.icon}`} />
                        </div>
                        <div className="flex flex-col text-center">
                            <span className="text-sm font-semibold sm:text-base md:text-lg">{item.Category}</span>
                            <span className="text-xs font-medium sm:text-sm md:text-[0.9rem]">{item.amount}</span>
                            <span className="text-xs sm:text-sm">
                                <strong className={`${item.progress > 0 ? 'text-green-400' : 'text-red-500'}`}>{item.progress}%</strong> from yesterday
                            </span>
                        </div>
                    </li>
                )
            })}
        </ul>
    )
}

export default BigCard;
