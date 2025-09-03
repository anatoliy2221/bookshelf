import { BooksApi } from './js/api/booksApi';
import { refs } from './js/refs/refs';
import { renders } from './js/renders/renders';

const bookApi = new BooksApi();

export async function renderHomePage() {


  const categories = await bookApi.getCategoryList();
  const topBooks = await bookApi.getTopBooks();

  renders.renderCategories(categories);
  renders.renderTopBooks(topBooks);
}

renderHomePage();

refs.categoryElem.addEventListener('click', onCategoryClick);

async function onCategoryClick(e) {
  const selectedCategory = e.target.textContent;
  if (e.currentTarget === e.target) return;
  setActiveCategory(selectedCategory);
  if (selectedCategory === "All categories") {
    const topBooks = await bookApi.getTopBooks();
    renders.renderTopBooks(topBooks);
  } else {
    const res = await bookApi.getBooksByCategory(selectedCategory);
    renders.renderSelectedCategory(res);
  }
}

function setActiveCategory(name) {
  document.querySelectorAll('.category-item a').forEach(link => link.classList.remove('active'));
  const links = document.querySelectorAll('.category-item a');

  links.forEach(link => {
    if (link.innerText === name) {
      link.classList.add('active');
    }
  });
}

refs.bookListElem.addEventListener('click', async e => {
  if (e.target.classList.contains('see-more-button')) {
    const section = e.target.closest('li');
    const selectedCategory = section.querySelector('h3').textContent;
    console.log(section.querySelector('h3'));

    const res = await bookApi.getBooksByCategory(selectedCategory);
    setActiveCategory(selectedCategory);
    renders.renderSelectedCategory(res);
  }
});


