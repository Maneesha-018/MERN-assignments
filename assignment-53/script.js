
const STORAGE_KEY = "tasks";

// Load tasks from localStorage
function loadTasks() {
    let data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : [];
}

// Save tasks in localStorage
function saveTasks(tasks) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
}

// Create a new task
function createTask(name) {
    return {
        id: Date.now(),
        name: name.trim(),
        completed: false
    };
}

// Find task using its ID
function findTaskById(tasks, id) {
    return tasks.find(task => task.id === id);
}

// Filter tasks
function filterTasks(tasks, filter) {
    if (filter === "completed") {
        return tasks.filter(task => task.completed);
    }

    if (filter === "pending") {
        return tasks.filter(task => !task.completed);
    }

    return tasks;
}

// Test utility functions
let tasks = loadTasks();

console.log("Existing Tasks:", tasks);

let newTask = createTask("Learn JavaScript");
console.log("New Task:", newTask);
