export const circleColor = (intensity) => {
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
};