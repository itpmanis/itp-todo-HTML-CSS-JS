const bookForm = document.getElementById("bookForm");
const bookList = document.getElementById("bookList");

let books = [];

bookForm.addEventListener("submit", addBook);

function addBook(event) {
  event.preventDefault();
  const title = document.getElementById("title").value;
  const author = document.getElementById("author").value;

  if (!title || !author) {
    alert("Please fill in all fields.");
    return;
  }

  const book = { title, author };
  books.push(book);

  displayBooks();
  bookForm.reset();
}

function displayBooks() {
  bookList.innerHTML = "";

  books.forEach((book, index) => {
    const bookItem = document.createElement("div");
    bookItem.classList.add("book-item");
    const bookDetails = `
            <h3>${book.title}</h3>
            <p>Author: ${book.author}</p>
            <button onclick="editBook(${index})" class="edit-button">Edit</button>
            <button onclick="deleteBook(${index})" class="delete-button">Delete</button>
        `;
    bookItem.innerHTML = bookDetails;
    bookList.appendChild(bookItem);
  });
}

function editBook(index) {
  const book = books[index];
  const newTitle = prompt("Enter new title:", book.title);
  const newAuthor = prompt("Enter new author:", book.author);
  if (newTitle && newAuthor) {
    books[index] = { title: newTitle, author: newAuthor };
    displayBooks();
  }
}

function deleteBook(index) {
  if (confirm("Are you sure you want to delete this book?")) {
    books.splice(index, 1);
    displayBooks();
  }
}

displayBooks();
