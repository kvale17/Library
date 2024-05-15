class Display {
    constructor(library) {
        this.library = library;
    }

    updateDisplay() {
        const displayDiv = document.querySelector(".display");
        displayDiv.innerHTML = "";

        for (const [i, book] of this.library.getLibrary().entries()) {
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

    sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    showForm() {
        document.querySelector('.book-form').style.display = 'block';
    }

    hideForm() {
        document.querySelector('.book-form').style.display = 'none';
    }
}

export { Display };