import { Display } from "../src/Display.js";
import { Library } from "../src/Library.js";
import { sleep } from "../src/utils.js";

const library = new Library();
const display = new Display(library);

var form = document.querySelector(".book-form")
function submitForm(event) {
    //Preventing page refresh
    event.preventDefault();

    const bookName = document.querySelector("#bookName").value;
    const bookAuthor = document.querySelector("#bookAuthor").value;
    const pages = document.querySelector("#pages").value;
    const read = document.querySelector("#yes").checked;

    library.addBookToLibrary(bookName, bookAuthor, pages, read);

    display.updateDisplay();

    form.reset();

    display.hideForm();
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

        library.deleteBook(index)

        display.updateDisplay();
    }

    if (event.target.value) {
        const bookCard = event.target.parentElement.parentElement;
        const index = parseInt(bookCard.id);

        if (event.target.checked) {
            library.myLibrary[index].read = true;
        }
        else {
            library.myLibrary[index].read = false;
        }
    }
}

document.querySelector('.button_plus').addEventListener('click', function () {
    // Call the showForm() function from Display.js
    display.showForm();
});