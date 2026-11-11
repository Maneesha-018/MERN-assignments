# To-Do App – Test Matrix

## 1. Testing Overview

The purpose of testing is to verify that all features of the To-Do App work correctly.

## 2. Test Cases

| Test ID | Test Scenario | Expected Result | Actual Result | Status |
|---|---|---|---|---|
| TC01 | Add a valid task | Task should be added | Task added successfully | Pass |
| TC02 | Add an empty task | Alert should appear | Alert displayed | Pass |
| TC03 | Edit a task | Task name should update | Task updated successfully | Pass |
| TC04 | Complete a task | Task should be marked completed | Task completed | Pass |
| TC05 | Delete a task | Task should be removed | Task deleted | Pass |
| TC06 | Filter pending tasks | Only pending tasks should appear | Pending tasks displayed | Pass |
| TC07 | Filter completed tasks | Only completed tasks should appear | Completed tasks displayed | Pass |
| TC08 | Refresh the page | Saved tasks should remain | Tasks remained saved | Pass |

## 3. Bugs Found and Fixes

| Bug | Cause | Fix |
|---|---|---|
| Empty task was accepted | Input validation missing | Added trim() validation |
| Tasks disappeared after refresh | Data was not saved | Used localStorage |
| Updated task was not saved | saveTasks() was not called | Called saveTasks() after editing |

## 4. Testing Summary

- Total test cases: 8
- Passed: 8
- Failed: 0

## 5. Conclusion

All major features of the To-Do App were tested. The identified issues were fixed and the application is working as expected.