document.addEventListener("DOMContentLoaded", () => {
    const taskInput = document.getElementById("task-input");
    const addTaskBtn = document.getElementById("add-task-btn");
    const pendingTasks = document.getElementById("pending-tasks");
    const completedTasks = document.getElementById("completed-tasks");

    // Add Task
    addTaskBtn.addEventListener("click", () => {
        const taskText = taskInput.value.trim();
        if (taskText === "") {
            alert("Please enter a task!");
            return;
        }
        addTask(taskText);
        taskInput.value = "";
    });

    function addTask(taskText) {
        const timestamp = new Date().toLocaleString(); // Get the current date and time
        const li = document.createElement("li");
        li.innerHTML = `
            <span>${taskText} <small>(Added: ${timestamp})</small></span>
            <div>
                <button class="complete-btn">Complete</button>
                <button class="delete-btn">Delete</button>
                <button class="edit-btn">Edit</button>
            </div>
        `;
        pendingTasks.appendChild(li);

        // Mark task as complete
        li.querySelector(".complete-btn").addEventListener("click", () => {
            li.querySelector(".complete-btn").remove();
            completedTasks.appendChild(li);
        });

        // Delete task
        li.querySelector(".delete-btn").addEventListener("click", () => {
            li.remove();
        });

        // Edit task
        li.querySelector(".edit-btn").addEventListener("click", () => {
            const newTaskText = prompt("Edit your task:", taskText);
            if (newTaskText) {
                const newTimestamp = new Date().toLocaleString();
                li.querySelector("span").innerHTML = `${newTaskText} <small>(Edited: ${newTimestamp})</small>`;
            }
        });
    }
});
