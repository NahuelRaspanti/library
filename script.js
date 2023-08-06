let myLibrary = [];

function Book(name, author, pages, read) {
  this.name = name;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary(event) {
    event.preventDefault();
    var modal = document.getElementById('modal-container');
    modal.style.visibility = 'hidden'

    var titleInput = document.getElementById('book-title');
    var authorInput = document.getElementById('book-author');
    var pagesInput = document.getElementById('book-pages');

    var book = new Book(titleInput.value, authorInput.value, pagesInput.value, false);
    myLibrary.push(book);

    event.target.reset();
    loopBooks();
}

function loopBooks() {
    var library = document.getElementById('library');
    while(library.firstChild) {
        library.removeChild(library.firstChild);
    }
    myLibrary.forEach(book => {
        var card = document.createElement('div');
        card.classList.add('book');
    
        var title = document.createElement('h3');
        title.textContent = book.name;
        var author = document.createElement('p');
        author.textContent = book.author;
        var pages = document.createElement('p');
        pages.textContent = book.pages;
    
        var read = document.createElement('button');
        read.textContent = "Read";
        var deleteButton = document.createElement('button');
        deleteButton.textContent = "Delete";

        deleteButton.addEventListener('click', () => removeBook(book.name));
    
        card.appendChild(title);
        card.appendChild(author);
        card.appendChild(pages);
        card.appendChild(read);
        card.appendChild(deleteButton);
    
        library.appendChild(card);
    });
}

function removeBook(title) {
    myLibrary = myLibrary.filter((book) => book.name != title );
    loopBooks();
}

document.getElementById('cancel').addEventListener('click', (event) => {
    document.getElementById('modal-container').style.visibility = 'hidden'
})

document.getElementById('open-container').addEventListener('click', (event) => {
    document.getElementById('modal-container').style.visibility = 'visible'
})

document.getElementById('book-form').addEventListener('submit', addBookToLibrary);