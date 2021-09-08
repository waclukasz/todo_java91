const setDate = () => {
    const dateDayElement = document.querySelector('.date-day');
    const monthNameElement = document.getElementById('monthName');
    const yearElement = document.querySelector('.date-month-year > span:last-of-type');

    let dayOfWeek = new Date().getDate();
    const year = new Date().getFullYear();
    const monthName = new Date().toLocaleDateString('en-en', { month: 'short' });

    if (dayOfWeek < 10) {
        dayOfWeek = `0${dayOfWeek}`;
    };
    
    dateDayElement.innerText = dayOfWeek;
    yearElement.innerText = year;
    monthNameElement.innerText = monthName;
}

setDate();