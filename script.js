document.addEventListener('DOMContentLoaded', () => {
    const addButton = document.querySelector('button');
    const inputField = document.getElementById('taskInput');
    const taskList = document.getElementById('tasks');

    // Load tasks from localStorage
    loadTasks();

    addButton.addEventListener('click', function() {
        addTask(inputField.value.trim());
        inputField.value = ''; // Clear the input after adding a task
    });

    inputField.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            addButton.click();
        }
    });

    function addTask(taskText, completed = false) {
        if (taskText) {
            const newTask = document.createElement('li');

            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.checked = completed;
            checkbox.addEventListener('change', function() {
                if (this.checked) {
                    newTask.classList.add('completed');
                } else {
                    newTask.classList.remove('completed');
                }
                saveTasks(); // Save tasks whenever a checkbox is changed
            });

            const taskLabel = document.createElement('span');
            taskLabel.textContent = taskText;

            if (completed) {
                newTask.classList.add('completed');
            }

            newTask.appendChild(checkbox);
            newTask.appendChild(taskLabel);
            taskList.appendChild(newTask);

            saveTasks(); // Save tasks whenever a new task is added
        }
    }

    function saveTasks() {
        const tasks = [];
        taskList.querySelectorAll('li').forEach(task => {
            const taskText = task.querySelector('span').textContent;
            const completed = task.querySelector('input').checked;
            tasks.push({ text: taskText, completed: completed });
        });
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    function loadTasks() {
        const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
        tasks.forEach(task => addTask(task.text, task.completed));
    }
});
