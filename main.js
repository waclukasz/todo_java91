const setDate = () => {
    const dateDayElement = document.querySelector('.date-day');
    const monthNameElement = document.getElementById('monthName');
    const yearElement = document.querySelector('.date-month-year > span:last-of-type');
    const nameOfDayElement = document.querySelector('.date-day-name');

    let dayOfWeek = new Date().getDate();
    const year = new Date().getFullYear();
    const monthName = new Date().toLocaleDateString('en-en', { month: 'short' });
    const dayName = new Date().toLocaleDateString('en-en', { weekday: 'long' });

    if (dayOfWeek < 10) {
        dayOfWeek = `0${dayOfWeek}`;
    };
    
    dateDayElement.innerText = dayOfWeek;
    yearElement.innerText = year;
    monthNameElement.innerText = monthName;
    nameOfDayElement.innerText = dayName;
}

setDate();

const tasksList = [];

const toggleModal = () => {
    const modalElement = document.querySelector('.modal-overlay');
    modalElement.classList.toggle('hidden');
}

const displayModalBtnElement = document.querySelector('.add-task-btn');
displayModalBtnElement.addEventListener('click', toggleModal);

const closeBtnElement = document.querySelector('.close-modal-btn');
closeBtnElement.addEventListener('click', toggleModal);
