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

    console.log("Added book: " + Object.values(book));
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

function showForm() {
    document.querySelector('.book-form').style.display = 'block';
}

function hideForm() {
    document.querySelector('.book-form').style.display = 'none';
}

var form = document.querySelector(".book-form")
function submitForm(event) {
    //Preventing page refresh
    event.preventDefault();

    const bookName = document.querySelector("#bookName").value;
    const bookAuthor = document.querySelector("#bookAuthor").value;
    const pages = document.querySelector("#pages").value;
    const read = document.querySelector("#yes").checked;

    addBookToLibrary(bookName, bookAuthor, pages, read);

    updateDisplay();

    form.reset();

    hideForm();
}

form.addEventListener('submit', submitForm);


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

