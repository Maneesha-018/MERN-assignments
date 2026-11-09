# Wireframes and User Flow

## Project Title
To-Do Management System

## 1. Introduction

A wireframe is a basic visual layout of a webpage. It shows the position of different elements before designing the actual interface.

## 2. Home Page Wireframe

```text
+--------------------------------------+
|             MY TO-DO LIST            |
+--------------------------------------+
|                                      |
|  [ Enter your task             ]     |
|                         [ ADD ]      |
|                                      |
|  [ ALL ] [ PENDING ] [ COMPLETED ]   |
|                                      |
|  ----------------------------------  |
|  Complete Assignment                |
|                      [EDIT] [DELETE] |
|                                      |
|  Learn JavaScript                    |
|                      [EDIT] [DELETE] |
|                                      |
|  Practice Coding                     |
|                      [EDIT] [DELETE] |
|                                      |
+--------------------------------------+
```

## 3. Main Components

1. Heading - Displays the application name.
2. Input Field - Allows users to enter a task.
3. Add Button - Adds a new task.
4. Filter Buttons - Display all, pending or completed tasks.
5. Edit Button - Updates an existing task.
6. Delete Button - Removes a task.
7. Task List - Displays all available tasks.

## 4. User Flow

The user follows these steps:

1. User opens the To-Do application.
2. Application loads previously saved tasks.
3. User enters a new task.
4. User clicks the Add button.
5. The new task appears in the task list.
6. User can edit or delete a task.
7. User can mark a task as completed.
8. User can filter tasks using filter buttons.
9. Updated tasks are saved in localStorage.

## 5. User Flow Diagram

```text
       Start
         |
         v
    Open Application
         |
         v
     Load Tasks
         |
         v
    Enter New Task
         |
         v
      Add Task
         |
         v
    Display Task
         |
         v
   Manage Task
    /   |    \
   v    v     v
 Edit Complete Delete
    \   |     /
     v  v    v
    Save Data
         |
         v
        End
```

## 6. Conclusion

The wireframe describes the basic layout of the To-Do application. The user flow explains how users interact with different features of the application.