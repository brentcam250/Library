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
  myLibrary.push(book);
  console.log(myLibrary);
  console.log(book);
  localStorage.setItem('myLibrary', JSON.stringify(myLibrary));
  localStorage.setItem('myLibrary', (myLibrary));

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
  // books = (localStorage.getItem("myLibrary"));
  // let string = '{title: "asdf", author: "asdf", pages: input#pages, read: "on"}';
  let string = '[1, 5, "false"]';
  // console.log(typeof books);
  // let string = (localStorage.getItem("myLibrary"));
  let books = JSON.parse(string);
  console.log(books)
  let list = document.getElementById('books-table');
  let li;
  // console.log(books);
  // let books;
  // console.log(books);
  for (book in books ){
    console.log(book)
    li = document.createElement('li');
    li.appendChild(document.createTextNode(book.title));
    list.appendChild(li);
    // console.log(li);
  }
  // console.log(books)
}
