import Circle from '../assets/Icons/circle.svg?react';
import MoreVertical from '../assets/Icons/morevertical.svg?react';

function TodayTasks({theme}){

    const Tasks = [
        { title: 'Finish the Figma Design', category: 'Programming', time: '08:00 AM', intensity: 'High' },
        { title: 'Front Lever Training', category: 'Fitness', time: '10:00 AM', intensity: 'Medium' },
        { title: 'Take Train to School', category: 'School', time: '12:30 PM', intensity: 'Low' },
        { title: 'Take Classes', category: 'School', time: '02:00 PM', intensity: 'Medium' },
        { title: 'Cook', category: 'Life', time: '06:00 PM', intensity: 'Low' },
        { title: 'Finish Front End', category: 'Programming', time: '10:00 PM', intensity: 'High' },
    ]

    const circleColor = (intensity) => {
        switch (intensity) {
            case 'High':
                return 'text-red-500';
            case 'Medium':
                return 'text-yellow-500';
            case 'Low':
                return 'text-green-500';
            default:
                return '';
        }
    }
    return(
        <ul className={`flex flex-col p-1 gap-2 rounded-lg ${theme === 'Dark' ? 'bg-gray-800 text-white' : 'bg-gray-300 text-gray-800'}`}>
            {Tasks.map((item, index) => {
                return(
                    <li key={index}
                        className={`grid grid-cols-[32px_minmax(0,1fr)_32px] items-center gap-3 px-4 py-3 sm:grid-cols-[32px_minmax(0,1fr)_120px_80px_minmax(70px,100px)_32px] ${
                            theme === 'Dark' ? 'bg-gray-800 text-white' : 'bg-gray-300 text-gray-800'
                        }`}
                    >
                        <input type="checkbox" checked={false}/>

                        <span className="min-w-0 truncate font-medium">{item.title}</span>

                        <span className="hidden justify-self-center rounded-full bg-purple-600 px-3 py-1 text-sm text-white sm:inline-flex">
    {item.category}
  </span>

                        <span className="hidden sm:block">{item.time}</span>

                        <div className="hidden items-center gap-2 sm:flex">
                            <Circle className={`h-3 w-3 ${circleColor(item.intensity)}`} />
                            <span>{item.intensity}</span>
                        </div>

                        <MoreVertical className="h-6 w-6 justify-self-end" />
                    </li>
                )
            })}
        </ul>
    )

}

export default TodayTasks;