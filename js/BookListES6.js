class Book {
  constructor (title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
  }
}

class UI {
  addBookToList (book) {
    const list = document.getElementById('book-list');
    // Create tr element
    const row = document.createElement('tr');
    // Insert cols
    row.innerHTML = `
      <td>${book.title}</td>
      <td>${book.author}</td>
      <td>${book.isbn}</td>
      <td><a href="#" class="delete">x</a></td>
    `;

    // Add data to the list of books
    list.appendChild(row);
  }

  showAlert (message, className) {
    // Create div
    const div = document.createElement('div');
    // Add classes
    div.className = `alert ${className}`;
    // Add text
    div.appendChild(document.createTextNode(message));
    // Get parent
    const container = document.querySelector('.container');
    // Get form
    const form = document.querySelector('#book-form');
    // Show message
    container.insertBefore(div, form);
    // Hide message in 3 seconds
    setTimeout(function () {
      document.querySelector('.alert').remove();
    }, 3000);
  }

  deleteBook (target) {
    if (target.className === 'delete') {
      target.parentElement.parentElement.remove();
    }
  }

  clearFields () {
    document.getElementById('book-title').value = '';
    document.getElementById('book-author').value = '';
    document.getElementById('book-isbn').value = '';
  }
}

// Event listeners
document.getElementById('book-form').addEventListener('submit', function (e) {
  // Get form values
  const title = document.getElementById('book-title').value;
  const author = document.getElementById('book-author').value;
  const isbn = document.getElementById('book-isbn').value;
  // Instantiate book
  const book = new Book(title, author, isbn);
  // Instantiate UI
  const ui = new UI();

  // Validation
  if (title === '' || author === '' || isbn === '') {
    ui.showAlert('Please check you fields and try again', 'error');
  } else {
    // Add book to list
    ui.addBookToList(book);
    // Clear fields
    ui.clearFields();
    ui.showAlert('Book is added', 'success');
  }
  e.preventDefault();
});

// Event listener for removing item from the list
document.getElementById('book-list').addEventListener('click', function (e) {
  // Instantiate UI
  const ui = new UI();
  // Delete book
  ui.deleteBook(e.target);
  // Show message
  ui.showAlert('Book is removed', 'success');
});
