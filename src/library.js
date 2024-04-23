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
        content.id = "Book-" + i;


        display.appendChild(content);
    }
}






