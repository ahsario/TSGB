import { renderSearchFormBlock } from './search-form.js';
import { renderSearchStubBlock } from './search-results.js';
import { renderUserBlock } from './user.js';
import { renderToast } from './lib.js';
import { getTodosByCount } from './utils/getTodosByCount.js';

const dateNow = new Date();
const defStartDate = new Date(dateNow.setDate(dateNow.getDate() + 1))
  .toISOString()
  .split('T')[0];
const defEndDate = new Date(dateNow.setDate(dateNow.getDate() + 3))
  .toISOString()
  .split('T')[0];

window.addEventListener('DOMContentLoaded', () => {
  renderUserBlock('Wade Warren', '/img/avatar.png', 0);
  renderSearchFormBlock(defStartDate, defEndDate);
  renderSearchStubBlock();
  renderToast(
    {
      text: 'Это пример уведомления. Используйте его при необходимости',
      type: 'success',
    },
    {
      name: 'Понял',
      handler: async () => {
        console.log(await getTodosByCount(4));
        console.log('Уведомление закрыто на ремонт');
      },
    }
  );
});
