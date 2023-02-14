const btn = document.querySelectorAll('.projects__button');
const backdrop = document.querySelector('.backdrop');

function openModalProjects(event) {
  const modalProjects = backdrop.querySelector('.modal-projects');
  const prevActiveWrapper = modalProjects.querySelector('.open-modal');
  if (prevActiveWrapper) {
    prevActiveWrapper.classList.remove('open-modal');
  }
  const projectActive = backdrop.querySelector(
    `[data-number="${event.currentTarget.dataset.number}"]`,
  );
  const btnClose = projectActive.querySelector('.modal__close');
  projectActive.classList.add('open-modal');
  modalProjects.classList.add('open-modal');
  btnClose.addEventListener('click', closeModal);
  $('.sliderModal').slick('setPosition');
  openModal();
}

export function openModalFeedback() {
  const modalFeedback = backdrop.querySelector('.modal-feedback');
  const btnClose = modalFeedback.querySelector('.modal__close');
  const btnCloseBig = document.querySelector('.modal-feedback__button');
  modalFeedback.classList.add('open-modal');
  btnClose.addEventListener('click', closeModal);
  btnCloseBig.addEventListener('click', closeModal);
  openModal();
}

function openModal() {
  backdrop.classList.remove('is-hidden');
  document.documentElement.classList.add('scroll-hidden');
  document.addEventListener('keydown', closeModalEsc);
  backdrop.addEventListener('click', closeModalBackdrop);
}

function closeModal() {
  const activeEl = backdrop.querySelector('.open-modal.modal-window');
  activeEl.classList.remove('open-modal');
  backdrop.classList.add('is-hidden');
  document.documentElement.classList.remove('scroll-hidden');
  document.removeEventListener('keydown', closeModalEsc);
  backdrop.removeEventListener('click', closeModalBackdrop);
}

function closeModalBackdrop(event) {
  if (event.target !== event.currentTarget) return;
  closeModal();
}

function closeModalEsc(event) {
  if (event.code !== 'Escape') return;
  closeModal();
}

Array.from(btn).forEach(item => item.addEventListener('click', openModalProjects));
