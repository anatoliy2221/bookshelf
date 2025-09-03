import { templateBook } from "./templateBook";

export function templateSection({ list_name, books }) {
  const firstFiveBooks = books.slice(0, 5);
  const booksMarkup = firstFiveBooks.map(templateBook).join('');

  return `
    <li>
      <h3 class="section-title test2">${list_name}</h3>
      <ul class="book-list">
        ${booksMarkup}
      </ul>
      <button class="see-more-button" data-category=${list_name}>See more</button>
    </li>
  `;
}


export function templateBooks(sections) {
  return sections.map(templateSection).join('');
}




