# Comparison Between localStorage and sessionStorage

## Introduction

Web Storage API allows websites to store data in the browser. It provides two types of storage: localStorage and sessionStorage.

## Difference Between localStorage and sessionStorage

| localStorage | sessionStorage |
|---|---|
| Data remains stored until manually deleted. | Data remains stored for the current tab session. |
| Data is available across browser tabs of the same origin. | Data is available only in the same tab. |
| Data remains after closing and reopening the browser. | Data is cleared when the tab or window session ends. |
| Uses `localStorage` object. | Uses `sessionStorage` object. |

## Common Methods

| Method | Purpose |
|---|---|
| `setItem()` | Stores data |
| `getItem()` | Retrieves data |
| `removeItem()` | Removes a specific item |
| `clear()` | Removes all stored items |

## Example Code

### localStorage

```javascript
localStorage.setItem("name", "Manisha");

let name = localStorage.getItem("name");

console.log(name);
```

### sessionStorage

```javascript
sessionStorage.setItem("course", "BCA");

let course = sessionStorage.getItem("course");

console.log(course);
```

## Conclusion

localStorage is useful for storing data that should remain available after closing the browser. sessionStorage is useful for temporary data that is needed only during a tab session.