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
    const display = document.querySelector(".display");
    display.innerHTML = "";

    for (const [i, book] of myLibrary.entries()) {
        const content = document.createElement("div");
        content.classList.add("book-card");

        const bookId = "Book-" + i;
        content.id = bookId;

        const bookNameDiv = document.createElement("div");
        bookNameDiv.classList.add("book-name");
        bookNameDiv.textContent = book.name;
        content.appendChild(bookNameDiv);


        display.appendChild(content);
    }
}

addBookToLibrary("Bible", "Jesus");
addBookToLibrary("Coding for Dummies", "Me");
updateDisplay();




