
# Persistent To-Do App - Testing Checklist

## Objective
To verify that the To-Do application works correctly and stores tasks permanently using localStorage.

## Test Cases

- [ ] Add a new task.
- [ ] Add multiple tasks.
- [ ] Edit an existing task.
- [ ] Mark a task as completed.
- [ ] Mark a completed task as pending.
- [ ] Filter all tasks.
- [ ] Filter pending tasks.
- [ ] Filter completed tasks.
- [ ] Delete a task.
- [ ] Refresh the page and verify that tasks remain.
- [ ] Close and reopen the browser tab and verify saved tasks.

## Expected Results

1. New tasks should appear in the list.
2. Edited tasks should show updated names.
3. Completed tasks should have a line-through style.
4. Filters should display the correct tasks.
5. Deleted tasks should disappear.
6. Saved tasks should remain after page refresh.

## Conclusion

The To-Do application uses localStorage to save tasks. The application loads saved data when the page opens and updates storage whenever tasks are changed.
