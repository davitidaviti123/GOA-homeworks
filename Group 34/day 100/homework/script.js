const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');
const clearAllBtn = document.getElementById('clearAllBtn');

window.addEventListener('load', loadTask);

addTaskBtn.addEventListener('click', () => {
    if (taskInput.value.trim() !== '') {
        addTask(taskInput.value);
        taskInput.value = '';
    } else {
        alert('Please enter a valid task.');
    }
});

clearAllBtn.addEventListener('click', () => {
    localStorage.clear();
    loadTask();
});

function saveTasks() {
    const tasks = Array.from(document.querySelectorAll('li')).map((li) => li.firstChild.textContent);
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function addTask(task) {
    const li = document.createElement('li');
    const btn = document.createElement('button');

    li.textContent = task;
    btn.textContent = 'Remove';
    btn.addEventListener('click', () => {
        li.remove();
        saveTasks();
    });

    li.appendChild(btn);
    taskList.appendChild(li);

    saveTasks();
}

function loadTask() {
    taskList.innerHTML = '';
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.forEach((task) => addTask(task));
}
