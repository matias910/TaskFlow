import Circle from '../assets/Icons/circle.svg?react';
import MoreVertical from '../assets/Icons/morevertical.svg?react';
import { useTheme } from '../context/ThemeContext.jsx';
import { Tasks } from "../data/Tasks.js";
import { circleColor } from "../utils/IntensityColor.js";

function TodayTasks() {
    const { theme } = useTheme();

    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const todayTasks = Tasks.filter(task => {
        const taskDate = new Date(task.date);
        taskDate.setHours(0, 0, 0, 0);
        return taskDate.getTime() === today.getTime();
    });

    return (
        <ul className={`flex flex-col p-1 gap-2 rounded-lg ${
            theme === 'Dark' ? 'bg-gray-800 text-white' : 'bg-gray-300 text-gray-800'
        }`}>
            {todayTasks.map((item, index) => (
                <li
                    key={index}
                    className={`grid grid-cols-[32px_minmax(0,1fr)_32px] items-center gap-3 px-4 py-3 sm:grid-cols-[32px_minmax(0,1fr)_120px_80px_minmax(70px,100px)_32px] ${
                        theme === 'Dark' ? 'bg-gray-800 text-white' : 'bg-gray-300 text-gray-800'
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
    );
}

export default TodayTasks;