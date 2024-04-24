const myLibrary = [];

function Book(name, author, pages, read) {
    this.name = name;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary(name, author, pages, read) {
    const book = new Book(name, author, pages, read);
    myLibrary.push(book);
}

function updateDisplay() {
    const displayDiv = document.querySelector(".display");
    displayDiv.innerHTML = "";

    for (const [i, book] of myLibrary.entries()) {
        const bookCardDiv = document.createElement("div");
        bookCardDiv.classList.add("book-card");

        const bookId = "Book-" + i;
        bookCardDiv.id = bookId;

        const bookNameDiv = document.createElement("div");
        bookNameDiv.classList.add("book-name");
        bookNameDiv.textContent = book.name;
        bookCardDiv.appendChild(bookNameDiv);

        const bookAuthorDiv = document.createElement("div");
        bookAuthorDiv.classList.add("book-author");
        bookAuthorDiv.textContent = "By: " + book.author;
        bookCardDiv.appendChild(bookAuthorDiv);

        const bookPagesDiv = document.createElement("div");
        bookPagesDiv.classList.add("book-pages");
        bookPagesDiv.textContent = "Pages: " + book.pages;
        bookCardDiv.appendChild(bookPagesDiv);

        const bookReadDiv = document.createElement("div");
        bookReadDiv.classList.add("book-read");
        bookReadDiv.textContent = "Read: ";
        bookCardDiv.appendChild(bookReadDiv);

        const deleteButton = document.createElement("i");
        deleteButton.classList = "fa fa-trash-o";
        bookCardDiv.appendChild(deleteButton);

        displayDiv.appendChild(bookCardDiv);
    }
}

addBookToLibrary("Bible", "Jesus", 300, true);
addBookToLibrary("Coding For Dummies", "Me", 500, true);
updateDisplay();




