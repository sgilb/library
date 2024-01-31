const myLibrary = [];

function Book(title, author, pages, isRead) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.isRead = isRead;
  this.info = function() {
    readString = this.isRead ? "read" : "not read yet";
    return `${this.title} by ${this.author}, ${this.pages} pages, ${readString}`;
  }
}

function addBookToLibrary(book) {
  if (!myLibrary.includes(book)) {
    myLibrary.push(book);
  }
}

function displayBooks() {
  for (let i = 0; i < myLibrary.length; i++) {
    return myLibrary[i].info();
  }
}

const book = new Book("To Kill a Mockingbird", "Harper Lee", 281, true);

addBookToLibrary(book);

console.log(displayBooks());