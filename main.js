const setDate = () => {
    const dateDayElement = document.querySelector('.date-day');
    let dayOfWeek = new Date().getDate();

    if (dayOfWeek < 10) {
        dayOfWeek = `0${dayOfWeek}`;
    };
    
    dateDayElement.innerText = dayOfWeek;
}


console.log(dateDayElement);