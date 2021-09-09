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

const renderTask = () => {
    // get element from HTML
    const taskListElement = document.querySelector('.tasks-list');

    // create element in JS
    const taskContainer = document.createElement('div');
    const taskParagraph = document.createElement('p');
    const checkBtn = document.createElement('button');
    const checkIcon = document.createElement('i');

    taskContainer.classList.add('task-container');
    checkBtn.classList.add('check-btn');
    checkIcon.classList.add('fas', 'fa-check');

    taskParagraph.innerText = 'My first'

    // created elements added to HTML
    taskContainer.appendChild(taskParagraph);
    taskContainer.appendChild(checkBtn);
    checkBtn.appendChild(checkIcon)
    taskListElement.appendChild(taskContainer);
}

const validateTask = (taskName) => {
    if (!taskName.trim()) {
        return 'Task name is required'
    }

    if (taskName.length < 4) {
        return 'Min 3 characters'
    }

    return;
}

const addTaskToModel = (taskInput) => {
    const task = {
        name: taskInput.value,
        isCompleted: false,
        id: Math.random().toString()
    };

    tasksList.push(task);

    taskInput.value = '';
}


const addTaskBtnElement = document.getElementById('addTask');
addTaskBtnElement.addEventListener('click', () => {
    const taskNameInputElement = document.getElementById('taskName');
    
    if (validateTask(taskNameInputElement.value)) {
        alert(validateTask(taskNameInputElement.value))
        return;
    }

    addTaskToModel(taskNameInputElement);
    toggleModal();
})





