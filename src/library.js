const myLibrary = [];

function Book(name, author, pages, read) {
    this.name = name;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary(name, author) {
    const book = new Book(name, author);
    myLibrary.push(book);
}

function updateDisplay() {
    for (const book in myLibrary) {
        const display = document.querySelector(".display");
        const content = document.createElement("div");
        content.classList.add("book-card");
        display.appendChild(content);
    }
}




