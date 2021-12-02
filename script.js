let testBook = new Book("Title", "author", "420")
let myLibrary = [];
myLibrary.push(testBook)

const container = document.querySelector(".container");
// const form = document.querySelector("#add-book-form");
const form = document.getElementById("add-book-form");


function Book(title, author, pages, read = false){
  //constructor
  this.title = title,
  this.author = author,
  this.pages = pages,
  this.read = read
}

function addBookToLibrary(book){

  myLibrary.push(book)
  console.log(book);



}
function openForm() {
  document.getElementById('add-book-form').style.display = 'block';
}

function closeForm(){
  document.getElementById('add-book-form').style.display = 'none';
}


//should close the popup if you click outside of it
window.addEventListener("click", (event) => {
  if(event.target === container) {
      // container.classList.remove("open")
      closeForm();
      console.log("closing");
  }
})

let title = document.getElementById("title");
let author = document.getElementById("author");
let pages = document.getElementById("pages");
let read = document.getElementById("read");


form.addEventListener("submit", function(event){
  event.preventDefault()
  closeForm();
  let book =  new Book(title.value, author.value, pages.value, read.value);
  addBookToLibrary(book);
})

// when pressing button, should delete any previous books that were inserted into HTML before doing it again.
function displayBooks(){

  let booksTable = document.getElementById('books-table');
  booksTable.innerHTML = ''; //Reset table before populating new one.


  let row;
  let i = 0;
  while (i < myLibrary.length){
    // console.log(myLibrary[i])
    let deleteButton = document.createElement("button");
    deleteButton.innerHTML = 'Delete Book';
    row = booksTable.insertRow(i);
      titleCell = row.insertCell(0)
        titleCell.innerHTML = myLibrary[i].title
      authorCell = row.insertCell(1)
        authorCell.innerHTML = myLibrary[i].author
      pagesCell = row.insertCell(2)
        pagesCell.innerHTML = myLibrary[i].pages
      readCell = row.insertCell(3)
        readCell.innerHTML = myLibrary[i].read
      row.appendChild(deleteButton);
    i ++;
  }
  // console.log(books)
}
