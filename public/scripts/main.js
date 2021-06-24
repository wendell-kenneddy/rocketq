import Modal from './Modal.js';
const modalBtn = document.querySelector('.modal button');
const checkBtns = document.querySelectorAll('.actions a.check');
const deleteBtns = document.querySelectorAll('.actions a.delete');
const modalTitle = document.querySelector('.modal h2');
const modalDescription = document.querySelector('.modal p');
const roomForm = document.getElementById('room-form');

const handleClick = (event, isCheckAsRead = true) => {
  event.preventDefault();

  const text = !isCheckAsRead ? 'Excluir' : 'Marcar como lida';
  const description = `Tem certeza que deseja ${text.toLocaleLowerCase()} esta pergunta?`;
  const modalBtnText = `Sim, ${text.toLocaleLowerCase()}`;
  const action = isCheckAsRead ? 'check' : 'delete';
  const roomId = document.getElementById('room-id').dataset.id;
  const questionId = event.target.dataset.id || event.target.parentElement.dataset.id;
  const formAction = `question/${roomId}/${questionId}/${action}`;

  modalTitle.innerHTML = text;
  modalDescription.innerHTML = description;
  modalBtn.innerHTML = modalBtnText;
  isCheckAsRead
    ? modalBtn.classList.remove('red')
    : modalBtn.classList.add('red');

  roomForm.setAttribute('action', formAction);
  return Modal.open();
};

checkBtns.forEach(btn => {
  btn.addEventListener('click', handleClick);
});

deleteBtns.forEach(btn => {
  btn.addEventListener('click', e => handleClick(e, false));
});
