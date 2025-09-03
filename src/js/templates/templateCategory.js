export function templateCategory({ list_name }) {
  return `
      <li class="category-item" data-category='${list_name}'>
        <a href='#${list_name}'>${list_name}</a>
      </li> `;
}