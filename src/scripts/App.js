import { handleClick } from './handleClick.js';
const checkBtns = document.querySelectorAll('.actions a.check');
const deleteBtns = document.querySelectorAll('.actions a.delete');

const init = () => {
  checkBtns.forEach(btn => {
    btn.addEventListener('click', handleClick);
  });

  deleteBtns.forEach(btn => {
    btn.addEventListener('click', e => handleClick(e, false));
  });
};

export { init };
