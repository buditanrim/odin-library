const myLibrary = [];
const form = document.getElementById("book-entry");
const bookContainer = document.getElementById("bookList");

// Listen to form submit
form.addEventListener("submit", (e) => {
    e.preventDefault();
    let formValue = e.target.elements;
    
    let newBook = new Book(
        formValue.author.value,
        formValue.title.value,
        formValue.pages.value
    )

    form.reset();
    newBook.pushToLibrary(newBook);
    newBook.buildBookItem(newBook);
    console.log(myLibrary);
});

// Class for book
class Book {
    constructor(author, title, pages) {
        this.author = author;
        this.title = title;
        this.pages = pages;
    }

    // method: add the new book to myLibrary
    pushToLibrary(obj) {
        myLibrary.push(obj)
    }

    buildBookItem(book) {
        const card = document.createElement("div");
        card.className = "book-container";

        const title = document.createElement("h3");
        const author = document.createElement("p");
        const pages = document.createElement("p");

        title.innerText = book.title;
        author.innerText = book.author;
        pages.innerText = book.pages;

        card.appendChild(title)
        card.appendChild(author)
        card.appendChild(pages)
        bookContainer.appendChild(card)
    }
}