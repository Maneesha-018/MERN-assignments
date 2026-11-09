
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
let currentFilter = "all";

// Save tasks
function saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

// Add task
function addTask() {
    let input = document.getElementById("taskInput");
    let taskName = input.value.trim();

    if (taskName === "") {
        alert("Please enter a task");
        return;
    }

    tasks.push({
        id: Date.now(),
        name: taskName,
        completed: false
    });

    input.value = "";

    saveTasks();
    displayTasks();
}

// Display tasks
function displayTasks() {
    let taskList = document.getElementById("taskList");
    taskList.innerHTML = "";

    let filteredTasks = tasks.filter(function(task) {
        if (currentFilter === "completed") {
            return task.completed;
        }

        if (currentFilter === "pending") {
            return !task.completed;
        }

        return true;
    });

    filteredTasks.forEach(function(task) {
        let li = document.createElement("li");

        let span = document.createElement("span");
        span.textContent = task.name;

        if (task.completed) {
            span.classList.add("completed");
        }

        span.onclick = function() {
            toggleTask(task.id);
        };

        let actions = document.createElement("div");
        actions.className = "actions";

        let editBtn = document.createElement("button");
        editBtn.textContent = "Edit";
        editBtn.className = "edit";

        editBtn.onclick = function() {
            editTask(task.id);
        };

        let deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";
        deleteBtn.className = "delete";

        deleteBtn.onclick = function() {
            deleteTask(task.id);
        };

        actions.append(editBtn, deleteBtn);
        li.append(span, actions);

        taskList.appendChild(li);
    });
}

// Complete or uncomplete task
function toggleTask(id) {
    let task = tasks.find(function(item) {
        return item.id === id;
    });

    if (!task) return;

    task.completed = !task.completed;

    saveTasks();
    displayTasks();
}

// Edit task
function editTask(id) {
    let task = tasks.find(function(item) {
        return item.id === id;
    });

    if (!task) return;

    let updatedName = prompt("Edit your task", task.name);

    if (updatedName !== null && updatedName.trim() !== "") {
        task.name = updatedName.trim();

        saveTasks();
        displayTasks();
    }
}

// Delete task
function deleteTask(id) {
    tasks = tasks.filter(function(task) {
        return task.id !== id;
    });

    saveTasks();
    displayTasks();
}

// Filter tasks
function filterTasks(filter) {
    currentFilter = filter;
    displayTasks();
}

// Initial display
displayTasks();
