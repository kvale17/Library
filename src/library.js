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


        displayDiv.appendChild(bookCardDiv);
    }
}

addBookToLibrary("Bible", "Jesus");
addBookToLibrary("Coding for Dummies", "Me");
updateDisplay();




