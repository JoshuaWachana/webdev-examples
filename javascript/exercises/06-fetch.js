const url = 'https://anapioficeandfire.com/api/books/';

const app = document.querySelector('#books');
const loadingGif = document.querySelector('#loading');

const fetchData = (url) => {
  // Fetch all books from the API of Ice and Fire and append them to the DOM
  // Create an element for each book that contains title, author, publication year, and number of pages
  // Update the styles in JavaScript to center all the books in the container given
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      data.forEach((book) => addBookToDOM(book));
    })
    .catch((error) => {
      app.textContent = `An error occurred: ${error}`;
    })
    .finally(app.removeChild(loadingGif));
};

const addBookToDOM = (book) => {
  const bookContainer = document.createElement('div');
  const title = document.createElement('h2');
  const authors = document.createElement('p');
  const year = document.createElement('p');
  const pages = document.createElement('p');

  title.textContent = book.name;
  authors.textContent = `by ${book.authors[0]}`;
  year.textContent = book.released.substring(0, 4);
  pages.textContent = `${book.numberOfPages} pages`;

  bookContainer.append(title, authors, year, pages);
  app.append(bookContainer);
};

fetchData(url);
