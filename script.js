let myLibrary = [];
const container = document.querySelector(".container");
// const form = document.querySelector("#add-book-form");
const form = document.getElementById("add-book-form");


function Book(title, author, publishedDate, read = false){
  //constructor
  this.title = title,
  this.author = author,
  this.pages = pages,
  this.read = read
}

function addBookToLibrary(book){
  console.log("adding books")
  myLibrary.push(book);
  localStorage.setItem('myLibrary', JSON.stringify(myLibrary));
  console.log(localStorage.getItem('myLibrary'));

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

  let book =  new Book(title.value, author.value, pages.value, read.value);
  addBookToLibrary(book);
})

function displayBooks(){
  books = localStorage.getItem("myLibrary")
  let list = document.getElementById('books-table')
  let li
  console.log(books.length);
  for (book in books ){
    // console.log(book)
    li = document.createElement('li');
    li.appendChild(document.createTextNode(book.title));
    list.appendChild(li);
    // console.log(li);
  }
  // console.log(books)
}
