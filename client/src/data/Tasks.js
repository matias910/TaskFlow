import Fitness from '../assets/Icons/fitness.svg?react';
import Life from '../assets/Icons/life.svg?react';
import Programming from '../assets/Icons/programming.svg?react';
import School from '../assets/Icons/school.svg?react';

const categoryIcons = {
    Fitness,
    Life,
    Programming,
    School,
};

export const Tasks = [
    { title: 'Finish the Figma Design', category: 'Programming', time: '08:00 AM', date: '2026-08-08', intensity: 'High'},
    { title: 'Front Lever Training', category: 'Fitness', time: '10:00 AM', date: '2026-08-08', intensity: 'Medium' },
    { title: 'Take Train to School', category: 'School', time: '12:30 PM', date: '2026-08-05', intensity: 'Low' },
    { title: 'Take Classes', category: 'School', time: '02:00 PM', date: '2026-08-05', intensity: 'Medium' },
    { title: 'Cook', category: 'Life', time: '06:00 PM', date: '2026-08-05', intensity: 'Low' },
    { title: 'Finish Front End', category: 'Programming', time: '10:00 PM', date: '2026-08-05', intensity: 'High' },
    { title: 'Finish the Django Setup', category: 'Programming', time: '08:00 AM', date: '2026-08-05', intensity: 'High'},
    { title: 'Back Lever Training', category: 'Fitness', time: '10:00 AM', date: '2026-08-06', intensity: 'Medium' },
    { title: 'Teach People', category: 'School', time: '12:30 PM', date: '2026-08-06', intensity: 'Low' },
    { title: 'Study for Exams', category: 'School', time: '02:00 PM', date: '2026-08-07', intensity: 'Medium' },
    { title: 'Read', category: 'Life', time: '06:00 PM', date: '2026-08-07', intensity: 'Low' },

].map(task=> ({
    ...task,
    icon: categoryIcons[task.category],
}))