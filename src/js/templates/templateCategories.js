import { templateCategory } from './templateCategory'

export function templateCategories(data) {
  return data.map(templateCategory).join('');
}