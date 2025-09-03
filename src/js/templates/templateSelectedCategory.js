import { templateBook } from './templateBook';

export function templateSelectedCategory(books) {
  const title = books.map(item => item.list_name).slice(0, 1);
  const markup = books.map(templateBook).join('');

  return `
    <h3 class='test'>${title}</h3>
    <ul class='category-list'>
      ${markup}
    </ul>`;
}
