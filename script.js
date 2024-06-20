document.addEventListener('DOMContentLoaded', () => {
    const addButton = document.querySelector('button');
    const inputField = document.getElementById('taskInput');
    const taskList = document.getElementById('tasks');

    addButton.addEventListener('click', function() {
        const taskText = inputField.value.trim();

        if (taskText) {
            const newTask = document.createElement('li');

            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.addEventListener('change', function() {
                if (this.checked) {
                    newTask.classList.add('completed');
                } else {
                    newTask.classList.remove('completed');
                }
            });

            const taskLabel = document.createElement('span');
            taskLabel.textContent = taskText;

            newTask.appendChild(checkbox);
            newTask.appendChild(taskLabel);
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
