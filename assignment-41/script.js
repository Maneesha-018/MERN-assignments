let books = [];

function displayBooks() {
    let bookList = document.getElementById("bookList");
    bookList.innerHTML = "";

    books.forEach(function(book, index) {
        let li = document.createElement("li");
        li.textContent = book;

        let deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";
        deleteBtn.className = "delete";

        deleteBtn.onclick = function() {
            deleteBook(index);
        };

        li.appendChild(deleteBtn);
        bookList.appendChild(li);
    });
}

function addBook() {
    let input = document.getElementById("bookInput");
    let bookName = input.value.trim();

    if (bookName === "") {
        alert("Please enter a book name");
        return;
    }

    books.push(bookName);
    input.value = "";

    displayBooks();
}

function deleteBook(index) {
    books.splice(index, 1);
    displayBooks();
}