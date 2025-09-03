export function templateBook({ book_image, title, author }) {

  return `
  <li class="book-item">
      <img src=${book_image} class="book-image" >
      <h3 class="book-title">${title}</h3>
      <p>${author}</p>
  </li>
  `;
}


