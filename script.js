document.addEventListener('DOMContentLoaded', () => {
    const taskForm = document.getElementById('task-form');
    const newTaskInput = document.getElementById('new-task');
    const pendingList = document.getElementById('pending-list');
    const completedList = document.getElementById('completed-list');

    taskForm.addEventListener('submit', (e) => {
        e.preventDefault();
        addTask(newTaskInput.value);
        newTaskInput.value = '';
    });

    function addTask(taskText) {
        const taskItem = document.createElement('li');
        taskItem.innerHTML = `
            <span>${taskText}</span>
            <div>
                <button class="complete">Complete</button>
                <button class="delete">Delete</button>
            </div>
        `;

        taskItem.querySelector('.complete').addEventListener('click', () => {
            completeTask(taskItem);
        });

        taskItem.querySelector('.delete').addEventListener('click', () => {
            deleteTask(taskItem);
        });

        pendingList.appendChild(taskItem);
    }

    function completeTask(taskItem) {
        taskItem.querySelector('.complete').remove();
        completedList.appendChild(taskItem);
    }

    function deleteTask(taskItem) {
        taskItem.remove();
    }
});
