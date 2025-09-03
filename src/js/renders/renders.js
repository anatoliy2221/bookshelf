import { refs } from "../refs/refs";
import { templateBooks } from "../templates/templateBooks";
import { templateCategories } from "../templates/templateCategories";
import { templateSelectedCategory } from "../templates/templateSelectedCategory";

export function renderCategories(data) {
  const markup = templateCategories(data);
  return (refs.categoryElem.insertAdjacentHTML('beforeend', markup));
}

export function renderTopBooks(books) {
  const markup = templateBooks(books);

  return refs.bookListElem.innerHTML = markup;
}

function renderSelectedCategory(data) {
  const markup = templateSelectedCategory(data);
  console.log(refs.topBooksElem);

  return refs.topBooksElem.innerHTML = markup;
}

export const renders = { renderCategories, renderTopBooks, renderSelectedCategory }