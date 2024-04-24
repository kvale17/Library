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

        const bookId = i;
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
        const checkBox = document.createElement("input");
        checkBox.setAttribute("type", "checkbox");
        bookReadDiv.classList.add("checkbox");
        bookReadDiv.appendChild(checkBox);

        if (book.read === true) {
            checkBox.checked = true;
        }

        bookCardDiv.appendChild(bookReadDiv);


        const deleteButton = document.createElement("i");
        deleteButton.classList = "fa fa-trash-o";
        bookCardDiv.appendChild(deleteButton);

        displayDiv.appendChild(bookCardDiv);
    }
}

function deleteBook(index) {
    myLibrary.splice(index, 1);
    updateDisplay();
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

document.querySelector('.display').onclick = async function (event) {
    if (event.target && event.target.matches('.fa')) {
        const bookCard = event.target.parentElement;
        const index = parseInt(bookCard.id);

        bookCard.innerHTML = "";
        bookCard.style.borderColor = "rgb(223, 216, 216)";
        bookCard.style.backgroundColor = "rgb(223, 216, 216)";

        await sleep(300);

        deleteBook(index)
    }

    if (event.target.value) {
        const bookCard = event.target.parentElement.parentElement;
        const index = parseInt(bookCard.id);

        if (event.target.checked) {
            myLibrary[index].read = true;
        }
        else {
            myLibrary[index].read = false;
        }
    }
}




addBookToLibrary("Bible", "Jesus", 300, true);
addBookToLibrary("Coding For Dummies", "Me", 500, false);

for (var i = 0; i < 26; i++) {
    addBookToLibrary("Book " + i, "Me", 500, false);
}


updateDisplay();




