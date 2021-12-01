let myLibrary = [];
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
  // book_string = `"title": ${book.title}, "author": ${book.author}, "pages": ${(book.pages)}, "read": ${book.read}`;
  // console.log(book_string);

  // myLibrary.push(book_string);
  myLibrary.push(book)
  console.log(book);
  // console.log(myLibrary);
  // console.log(book);
  // localStorage.setItem('myLibrary', JSON.stringify(myLibrary));
  // localStorage.setItem('myLibrary', (myLibrary));

  // console.log(localStorage.getItem('myLibrary'));
  // books = localStorage.getItem('myLibrary');
  // let books = JSON.parse(string);
  // new_book = books[0];
  // console.log(new_book)


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
  // let test = (localStorage.getItem("myLibrary"));
  // let string = '{title: "asdf", author: "asdf", pages: input#pages, read: "on"}';
  // let string = '[1, 5, "false"]';
  // console.log(typeof books);
  // let string = (localStorage.getItem("myLibrary"));
  // let books = JSON.parse(string);
  // console.log(`testing ${books}`)
  // console.log(books.title);
  let booksTable = document.getElementById('books-table');
  let li;
  // console.log(books);
  // let books;
  // console.log(books);
  let row;
  let i = 0;
  // for (book in myLibrary ){
  while (i < myLibrary.length){
    // console.log(myLibrary[i])
    row = booksTable.insertRow(i);
      titleCell = row.insertCell(0)
        titleCell.innerHTML = myLibrary[i].title
      authorCell = row.insertCell(1)
        authorCell.innerHTML = myLibrary[i].author
      pagesCell = row.insertCell(2)
        pagesCell.innerHTML = myLibrary[i].pages
    i ++;
  }
  // console.log(books)
}
