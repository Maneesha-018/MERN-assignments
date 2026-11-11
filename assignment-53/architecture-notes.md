# To-Do App – Architecture Notes

## 1. Project Overview
The To-Do App helps users manage their daily tasks. Users can add, edit, complete, filter and delete tasks.

## 2. Technologies Used
- HTML – Structure of the application
- CSS – Styling and responsive design
- JavaScript – Application logic
- LocalStorage – Saving tasks in the browser

## 3. Project Structure
- `index.html` – Main page of the application.
- `style.css` – Styling and layout.
- `script.js` – JavaScript functions and application logic.
- `architecture-notes.md` – Project architecture documentation.

## 4. Application Architecture

The application follows three main layers:

1. **User Interface:** Displays tasks and buttons.
2. **JavaScript Logic:** Handles task creation, editing, filtering and deletion.
3. **LocalStorage:** Stores tasks so they remain available after refreshing the page.

## 5. Data Structure

Each task contains:

- id
- name
- completed

Example:

```javascript
{
    id: 101,
    name: "Learn JavaScript",
    completed: false
}
```

## 6. Utility Functions

- `loadTasks()` – Loads tasks from LocalStorage.
- `saveTasks()` – Saves tasks in LocalStorage.
- `createTask()` – Creates a new task.
- `findTaskById()` – Finds a task using its ID.
- `filterTasks()` – Filters completed and pending tasks.

## 7. Data Flow

User Action → JavaScript Function → Update Data → LocalStorage → Display Updated Tasks

## 8. Conclusion

The application uses reusable JavaScript functions to manage tasks and LocalStorage to maintain data between page refreshes.