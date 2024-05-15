import { Book } from "../src/Book.js";

class Library {
    constructor() {
        this.myLibrary = [];
    }


    addBookToLibrary(name, author, pages, read) {
        const book = new Book(name, author, pages, read);
        this.myLibrary.push(book);

        console.dir("Added book: " + JSON.stringify(book));
    }

    deleteBook(index) {
        this.myLibrary.splice(index, 1);
    }

    getLibrary() {
        return this.myLibrary;
    }
}

export { Library };



