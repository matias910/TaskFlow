import { Tasks } from "../data/Tasks.js";
import { useTheme } from "../context/ThemeContext.jsx";
import Circle from '../assets/Icons/circle.svg?react';
import {circleColor} from "../utils/IntensityColor.js";


function UpcomingTasks() {
    const { theme } = useTheme();

    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const upcomingTasks = Tasks.filter(task => {
        const taskDate = new Date(task.date);
        taskDate.setHours(0, 0, 0, 0);
        return taskDate >= today;
    }).sort((a, b) => new Date(a.date) - new Date(b.date));

    const intensityColor = (intensity) => {
        switch (intensity) {
            case "High":
                return "text-red-500";
            case "Medium":
                return "text-yellow-500";
            case "Low":
                return "text-green-500";
            default:
                return "";
        }
    };

    return (
        <div className={`w-full rounded-xl p-4 transition-all duration-700 ease-in-out
      ${theme === "Dark" ? "bg-gray-800 text-white" : "bg-gray-300 text-gray-800"}`}>

            <div className={`flex items-center justify-between mb-4`}>
                <h2 className="text-lg font-semibold">Upcoming Tasks</h2>
                <span className="text-sm opacity-70">{upcomingTasks.length} tasks</span>
            </div>

            <div className={`grid gap-4 grid-cols-repeat(auto-fit)`}>
                {upcomingTasks.map((task, index) => {
                    return(
                        <div key={index} className={`rounded-lg p-4 shadow-sm transition-all duration-700 ease-in-out
                ${theme === "Dark" ? "bg-gray-900" : "bg-gray-200"}`}>
                            <div className={`flex items-center justify-between gap-3`}>
                                <Circle className={`h-3 w-3 ${circleColor(task.intensity)}`} />
                                <span>{task.title}</span>
                                <span className="hidden justify-self-center rounded-full bg-purple-600 px-3 py-1 text-sm text-white sm:inline-flex">
            {task.category}
          </span>
                                <span className="text-xs opacity-70 whitespace-nowrap">{task.date}</span>

                            </div>


                        </div>
                    )
                })}
            </div>



            {/*}



            <div className="grid gap-4 grid-cols-[repeat(auto-fit,minmax(220px,1fr))]">
                {upcomingTasks.map((task, index) => {
                    const Icon = task.icon;

                    return (
                        <div
                            key={index}
                            className={`rounded-lg p-4 shadow-sm transition-all duration-700 ease-in-out
                ${theme === "Dark" ? "bg-gray-900" : "bg-gray-200"}`}
                        >
                            <div className="flex items-start justify-between gap-3">
                                <div className="flex items-center gap-2">
                                    {Icon && <Icon className="w-5 h-5 shrink-0" />}
                                    <span className={`text-sm font-medium ${intensityColor(task.intensity)}`}>
                    {task.intensity}
                  </span>
                                </div>

                                <span className="text-xs opacity-70 whitespace-nowrap">{task.date}</span>
                            </div>

                            <div className="mt-3">
                                <h3 className="font-semibold leading-tight">{task.title}</h3>
                                <p className="text-sm mt-1 opacity-80">{task.category}</p>
                                <p className="text-sm mt-1 opacity-80">{task.time}</p>
                            </div>
                        </div>
                    );
                })}
            </div>

            {upcomingTasks.length === 0 && (
                <p className="mt-4 text-sm opacity-70">No upcoming tasks.</p>
            )}

            */}
        </div>
    );
}

export default UpcomingTasks;