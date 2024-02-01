const myLibrary = [];
const tableBody = document
  .getElementById("library")
  .getElementsByTagName("tbody")[0];

const newBookDialog = document.querySelector("dialog.new");
const newBookButton = document.querySelector("button.new");
const newBookDialogCancelButton = document.querySelector(
  "dialog.new > button.cancel"
);

const form = document.getElementById("new-book");

function Book(title, author, pages, isRead) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.isRead = isRead;
}

function addBookToLibrary(book) {
  if (!myLibrary.includes(book)) {
    myLibrary.push(book);
    displayBooks();
  }
}

function removeBook(book) {
  let index = myLibrary.indexOf(book);
  if (index !== -1) {
    myLibrary.splice(index, 1);
    displayBooks();
  }
}

function toggleRead(book) {
  book.isRead = !book.isRead;
  displayBooks();
}

function displayBooks() {
  tableBody.innerHTML = ""; // Clear table contents

  myLibrary.forEach((book) => {
    let bookRow = tableBody.insertRow();

    // Insert data for book properties
    for (const property in book) {
      let newCell = bookRow.insertCell();
      let newContent;

      // Add toggle
      if (property === "isRead") {
        let readToggle = document.createElement("input");
        readToggle.type = "checkbox";
        readToggle.className = "read-toggle";
        readToggle.checked = book[property];
        readToggle.onclick = (event) => {
          toggleRead(book);
          console.log(myLibrary);
        };
        newContent = readToggle;
      } else {
        newContent = document.createTextNode(book[property]);
      }
      newCell.appendChild(newContent);
    }

    // Add delete button for each book
    let deleteButton = document.createElement("button");
    deleteButton.className = "remove";
    deleteButton.innerText = "X";
    deleteButton.onclick = () => removeBook(book);

    let newCell = bookRow.insertCell();
    newCell.appendChild(deleteButton);
  });
}

newBookButton.addEventListener("click", () => {
  newBookDialog.showModal();
});

newBookDialogCancelButton.addEventListener("click", () => {
  newBookDialog.close();
});

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const title = form.title.value;
  const author = form.author.value;
  const pages = form.pages.value;
  const isRead = form.read.checked;

  const book = new Book(title, author, pages, isRead);
  addBookToLibrary(book);
  newBookDialog.close();
  form.reset();
});
