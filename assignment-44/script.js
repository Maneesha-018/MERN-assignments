let tasks = [];
let currentFilter = "all";

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
    displayTasks();
}

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

function toggleTask(id) {
    let task = tasks.find(function(item) {
        return item.id === id;
    });

    task.completed = !task.completed;
    displayTasks();
}

function editTask(id) {
    let task = tasks.find(function(item) {
        return item.id === id;
    });

    let updatedName = prompt("Edit your task", task.name);

    if (updatedName !== null && updatedName.trim() !== "") {
        task.name = updatedName.trim();
        displayTasks();
    }
}

function deleteTask(id) {
    tasks = tasks.filter(function(task) {
        return task.id !== id;
    });

    displayTasks();
}

function filterTasks(filter) {
    currentFilter = filter;
    displayTasks();
}

displayTasks();