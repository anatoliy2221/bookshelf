/* empty css                      */import{a as m}from"./assets/vendor-BkCUij8E.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&n(l)}).observe(document,{childList:!0,subtree:!0});function o(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(r){if(r.ep)return;r.ep=!0;const s=o(r);fetch(r.href,s)}})();class d{constructor(){this.BASE_URL="https://books-backend.p.goit.global",this.END_POINT="/books"}async fetchData(t=""){const o=`${this.BASE_URL}${this.END_POINT}${t}`;return(await m.get(o)).data}getCategoryList(){return this.fetchData("/category-list")}async getTopBooks(){return this.fetchData("/top-books")}async getBooksByCategory(t){const o=encodeURIComponent(t);return this.fetchData(`/category?category=${o}`)}async getBooksById(t){return this.fetchData(`/${t}`)}}const c={rootElem:document.querySelector("#app"),categoryElem:document.querySelector(".categories-list"),allCategoryElem:document.querySelector("#allCategories"),topBooksElem:document.querySelector(".top-books-block"),bookListElem:document.querySelector(".top-books-list"),shoppingListElem:document.querySelector(".shopping-list"),shoppingLinkElem:document.querySelector(".shopping-link"),seeMoreButtonElem:document.querySelector(".see-more-button"),navElem:document.querySelector(".header-navigation-list")};function u({book_image:e,title:t,author:o}){return`
  <li class="book-item">
      <img src=${e} class="book-image" >
      <h3 class="book-title">${t}</h3>
      <p>${o}</p>
  </li>
  `}function p({list_name:e,books:t}){const n=t.slice(0,5).map(u).join("");return`
    <li>
      <h3 class="section-title test2">${e}</h3>
      <ul class="book-list">
        ${n}
      </ul>
      <button class="see-more-button" data-category=${e}>See more</button>
    </li>
  `}function y(e){return e.map(p).join("")}function f({list_name:e}){return`
      <li class="category-item" data-category='${e}'>
        <a href='#${e}'>${e}</a>
      </li> `}function k(e){return e.map(f).join("")}function h(e){const t=e.map(n=>n.list_name).slice(0,1),o=e.map(u).join("");return`
    <h3 class='test'>${t}</h3>
    <ul class='category-list'>
      ${o}
    </ul>`}function B(e){const t=k(e);return c.categoryElem.insertAdjacentHTML("beforeend",t)}function b(e){const t=y(e);return console.log(c.bookListElem),c.bookListElem.innerHTML=t}function E(e){const t=h(e);return console.log(c.topBooksElem),c.topBooksElem.innerHTML=t}const i={renderCategories:B,renderTopBooks:b,renderSelectedCategory:E},a=new d;async function C(){const e=await a.getCategoryList(),t=await a.getTopBooks();i.renderCategories(e),i.renderTopBooks(t)}C();c.categoryElem.addEventListener("click",L);async function L(e){const t=e.target.textContent;if(e.currentTarget!==e.target)if(g(t),t==="All categories"){const o=await a.getTopBooks();i.renderTopBooks(o)}else{const o=await a.getBooksByCategory(t);i.renderSelectedCategory(o)}}function g(e){document.querySelectorAll(".category-item a").forEach(o=>o.classList.remove("active")),document.querySelectorAll(".category-item a").forEach(o=>{o.innerText===e&&o.classList.add("active")})}c.bookListElem.addEventListener("click",async e=>{if(e.target.classList.contains("see-more-button")){const t=e.target.closest("li"),o=t.querySelector("h3").textContent;console.log(t.querySelector("h3"));const n=await a.getBooksByCategory(o);g(o),i.renderSelectedCategory(n)}});
//# sourceMappingURL=index.js.map
