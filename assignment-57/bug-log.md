# To-Do App – Bug Log

## 1. Introduction

This document contains the bugs identified during the testing of the To-Do App, their causes, fixes and verification results.

## 2. Bug Details

### Bug 1: Empty Task Submission

- **Issue:** The application accepted empty task input.
- **Cause:** Input validation was missing.
- **Fix:** Used `trim()` to check whether the input is empty.
- **Verification:** Submitted an empty input. An alert appeared. **Status: Fixed**

### Bug 2: Tasks Disappeared After Refresh

- **Issue:** Tasks disappeared after refreshing the page.
- **Cause:** Tasks were not stored permanently.
- **Fix:** Used `localStorage` to save task data.
- **Verification:** Added a task and refreshed the page. The task remained visible. **Status: Fixed**

### Bug 3: Edited Task Was Not Saved

- **Issue:** Updated task details were not saved.
- **Cause:** The save function was not called after editing.
- **Fix:** Called `saveTasks()` after updating the task.
- **Verification:** Edited a task and refreshed the page. The updated name remained. **Status: Fixed**

## 3. Bug Summary

| Bug ID | Issue | Status |
|---|---|---|
| BUG01 | Empty task submission | Fixed |
| BUG02 | Tasks disappeared after refresh | Fixed |
| BUG03 | Edited task was not saved | Fixed |

## 4. Conclusion

The identified bugs were fixed and verified through testing. The application is working as expected.