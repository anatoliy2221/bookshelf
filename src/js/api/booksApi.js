import axios from 'axios';

export class BooksApi {
  constructor() {
    this.BASE_URL = 'https://books-backend.p.goit.global';
    this.END_POINT = '/books';
  }

  async fetchData(path = '') {
    const url = `${this.BASE_URL}${this.END_POINT}${path}`;
    const res = await axios.get(url);
    return res.data;
  }

  getCategoryList() {
    return this.fetchData('/category-list');
  }

  async getTopBooks() {
    return this.fetchData('/top-books');
  }

  async getBooksByCategory(selectedCategory) {
    const encoded = encodeURIComponent(selectedCategory)
    return this.fetchData(`/category?category=${encoded}`);
  }

  async getBooksById(bookId) {
    return this.fetchData(`/${bookId}`);
  }
}