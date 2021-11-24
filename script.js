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
  // get form stuff first
  // let newbook = new Book(

  // )
}
function openForm() {
  document.getElementById('add-book-form').style.display = 'block';
}

function closeForm(){
  document.getElementById('add-book-form').style.display = 'none';
}


// doesnt work yet...
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
  // console.log(title.value);
  // console.log(author.value);
  // console.log(pages.value);
  // console.log(read.value);

  let book =  new Book(title.value, author.value, pages.value, read.value)
})

//form submitted, create new book and then add it to library
// function addBook(title, author, pages, read){
//   let book = Book.new(title,author,pages,read)
//   // addBookToLibrary(book);
//   myLibrary.push(book);
//   localStorage.setItem('myLibrary', JSON.stringify(myLibrary));
//   // console.log(myLibrary);

// }

// form.addEventListener("submit", (e) => {
//   let bookAttributes = event.target.elements
//   console.log(bookAttributes);
// })

