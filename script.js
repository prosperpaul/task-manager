document.addEventListener('DOMContentLoaded', () => {
    const taskNameInput = document.getElementById('taskName');
    const prioritySelect = document.getElementById('priority');
    const deadlineInput = document.getElementById('deadline');
    const addTaskBtn = document.getElementById('addTaskBtn');
    const tasksList = document.getElementById('tasks');
    let tasks = [];

    function renderTasks() {
        tasksList.innerHTML = '';
        tasks.forEach((task, index) => {
            const taskElement = document.createElement('li');
            taskElement.innerHTML = `
                <span><strong>${task.name}</strong> - ${task.deadline}</span>
                <span class="task-priority ${getPriorityClass(task.priority)}">${task.priority}</span>
                <div class="actions">
                    <button class="edit-btn" onclick="editTask(${index})">Edit</button>
                    <button class="delete-btn" onclick="deleteTask(${index})">Delete</button>
                </div>
            `;
            tasksList.appendChild(taskElement);
        });
    }

    function getPriorityClass(priority) {
        return priority === 'high' ? 'priority-high' :
               priority === 'medium' ? 'priority-medium' : 'priority-low';
    }

    addTaskBtn.addEventListener('click', () => {
        const taskName = taskNameInput.value.trim();
        const priority = prioritySelect.value;
        const deadline = deadlineInput.value;
        if (taskName && deadline) {
            tasks.push({ name: taskName, priority, deadline });
            renderTasks();
            clearInputs();
        }
    });

    window.editTask = (index) => {
        const task = tasks[index];
        taskNameInput.value = task.name;
        prioritySelect.value = task.priority;
        deadlineInput.value = task.deadline;
        tasks.splice(index, 1);
        renderTasks();
    };

    window.deleteTask = (index) => {
        tasks.splice(index, 1);
        renderTasks();
    };

    function clearInputs() {
        taskNameInput.value = '';
        prioritySelect.value = 'low';
        deadlineInput.value = '';
    }

    renderTasks();
});
