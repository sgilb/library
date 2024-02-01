const myLibrary = [];
let tableBody = document
  .getElementById("library")
  .getElementsByTagName("tbody")[0];

function Book(title, author, pages, isRead) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.isRead = isRead;
  // this.info = function () {
  //   readString = this.isRead ? "read" : "not read yet";
  //   return `${this.title} by ${this.author}, ${this.pages} pages, ${readString}`;
  // };
}

function addBookToLibrary(book) {
  if (!myLibrary.includes(book)) {
    myLibrary.push(book);
  }
}

function displayBooks() {
  myLibrary.forEach((book) => {
    let bookRow = tableBody.insertRow();

    for (const property in book) {
      let newCell = bookRow.insertCell();
      let newText = document.createTextNode(book[property]);
      newCell.appendChild(newText);
    }
  });
}

const book = new Book("To Kill a Mockingbird", "Harper Lee", 281, true);
addBookToLibrary(book);
displayBooks();
