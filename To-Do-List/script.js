// Function to add a new task
function addTask() {
    const taskText = document.getElementById("task").value.trim();
    if (taskText === "") return;

    const taskList = document.getElementById("taskList");

    const li = document.createElement("li");
    li.innerHTML = `
        <span>${taskText}</span>
        <button onclick="deleteTask(this)">Delete</button>
    `;

    taskList.appendChild(li);

    // Clear the input field
    document.getElementById("task").value = "";

    // Save tasks to local storage
    saveTasksToLocalStorage();
}

// Function to delete a task
function deleteTask(button) {
    const li = button.parentElement;
    li.remove();

    // Save tasks to local storage
    saveTasksToLocalStorage();
}

// Function to save tasks to local storage
function saveTasksToLocalStorage() {
    const tasks = [];
    const taskList = document.getElementById("taskList").getElementsByTagName("li");

    for (let i = 0; i < taskList.length; i++) {
        const taskText = taskList[i].getElementsByTagName("span")[0].textContent;
        tasks.push(taskText);
    }

    localStorage.setItem("tasks", JSON.stringify(tasks));
}

// Load tasks from local storage on page load
window.onload = function () {
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];

    for (const taskText of tasks) {
        const taskList = document.getElementById("taskList");

        const li = document.createElement("li");
        li.innerHTML = `
            <span>${taskText}</span>
            <button onclick="deleteTask(this)">Delete</button>
        `;

        taskList.appendChild(li);
    }
};