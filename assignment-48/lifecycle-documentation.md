# Load-Update-Save-Render Lifecycle

## Introduction

The Load-Update-Save-Render lifecycle describes how an application manages and displays data using JavaScript and localStorage.

## 1. Load

- Load means retrieving previously saved data.
- The application reads data from localStorage.
- JSON.parse() converts stored JSON strings into JavaScript objects.

Example:

```javascript
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
```

## 2. Update

- Update means adding, editing or deleting data.
- JavaScript arrays and objects are used to modify the data.

Example:

```javascript
tasks.push("Complete Assignment");
```

## 3. Save

- Save means storing updated data in localStorage.
- JSON.stringify() converts JavaScript data into a JSON string.

Example:

```javascript
localStorage.setItem("tasks", JSON.stringify(tasks));
```

## 4. Render

- Render means displaying data on the webpage.
- DOM methods like createElement() and appendChild() are used.

Example:

```javascript
let list = document.getElementById("taskList");

list.innerHTML = "";

tasks.forEach(function(task) {
    let li = document.createElement("li");
    li.textContent = task;
    list.appendChild(li);
});
```

## Lifecycle Flow

1. Load saved data from localStorage.
2. Update the data using JavaScript.
3. Save updated data in localStorage.
4. Render the updated data on the webpage.

## Conclusion

The Load-Update-Save-Render lifecycle helps applications manage data and keep information available after page refresh using localStorage.