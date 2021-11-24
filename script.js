let myLibrary = [];

function Book(title, author, publishedDate, read = false){
  //constructor
  this.title = title,
  this.author = author,
  this.pages = pages,
  this.read = read
}

function addBookToLibrary(author, title, publishedDate, read){
  
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