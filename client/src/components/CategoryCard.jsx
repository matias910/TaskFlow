import { useTheme } from '../context/ThemeContext.jsx';
import { Tasks } from "../data/Tasks.js";

function CategoryCard() {
    const { theme } = useTheme();

    const CategoryList = [...new Map(
        Tasks.map(task => [task.category, { category: task.category, icon: task.icon }])
    ).values()];

    return (
        <div className={`flex flex-col rounded-xl w-1/2 p-4
      ${theme === 'Dark' ? 'bg-gray-800 text-white' : 'bg-gray-300 text-gray-800'}`}>
            <div className="flex justify-between p-4">
                <span className={`text-xl`}>Categories</span>
                <button className={`rounded-lg p-4 ${theme === "Dark" ? "bg-gray-600 text-white" : "bg-gray-200"}`}>
                    <span>View All</span>
                </button>
            </div>

            <div>
                <ul className="grid gap-4 pt-5 transition-all duration-700 ease-in-out grid-cols-[repeat(auto-fit,minmax(180px,1fr))]">
                    {CategoryList.map((item, index) => {
                        const Icon = item.icon;

                        return (
                            <li
                                key={index}
                                className={`flex justify-between p-2 px-10 rounded-lg ${theme === 'Dark' ? 'bg-gray-900 text-white' : 'bg-gray-200 text-gray-800'}`}
                            >
                                <div className={`flex items-center gap-2`}>
                                    {Icon && <Icon className="transition-all duration-700 ease-in-out" />}
                                </div>
                                <div className={`flex flex-col items-center gap-1 transition-all duration-700 ease-in-out`}>
                                    <span>{item.category}</span>
                                    <span>{Tasks.filter(task => task.category === item.category).length} Tasks</span>
                                </div>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </div>
    );
}

export default CategoryCard;