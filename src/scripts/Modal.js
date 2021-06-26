const modalWrapper = document.querySelector('.modal-wrapper');
const cancelBtn = document.querySelector('.modal .cancel');

export default class Modal {
  static open() {
    modalWrapper.classList.add('active');
    cancelBtn.addEventListener('click', Modal.close);
  }

  static close() {
    modalWrapper.classList.remove('active');
  }
}
