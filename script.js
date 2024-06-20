document.addEventListener('DOMContentLoaded', () => {
    const addButton = document.querySelector('button');
    const inputField = document.getElementById('taskInput');
    const taskList = document.getElementById('tasks');

    addButton.addEventListener('click', function() {
        const taskText = inputField.value.trim();

        if (taskText) {
            const newTask = document.createElement('li');
            newTask.textContent = taskText;
            newTask.addEventListener('click', function() {
                this.classList.toggle('completed');
            });
            taskList.appendChild(newTask);
            inputField.value = ''; // Clear the input after adding a task
        }
    });

    inputField.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            addButton.click();
        }
    });
});
