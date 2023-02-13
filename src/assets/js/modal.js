(() => {
  const btn = document.querySelectorAll('.projects__button');
  const backdrop = document.querySelector('.backdrop');  

  function openModalProjects(event) {
    const modalProjects = backdrop.querySelector(".modal-projects");
    const projectActive = backdrop.querySelector(`[data-number="${event.currentTarget.dataset.number}"]`);
    const btnClose = projectActive.querySelector(".modal-projects__close");
    projectActive.classList.add('open-modal');
    modalProjects.classList.add('open-modal');
    btnClose.addEventListener("click", closeModal);
    $('.sliderModal').slick('setPosition');
    openModal();
  }

  // function openModalFeedback() {
  //   const modalFeedback = backdrop.querySelector(".modal-feedback");
  //   const btnClose = modalFeedback.querySelector(".modal-feedback__close");
  //   modalFeedback.classList.add('is-active');
  //   btnClose.addEventListener("click", closeModal);
  //   openModal();
  // }

  function openModal() {
    backdrop.classList.remove('is-hidden');
    document.body.classList.add("scroll-hidden");
    document.addEventListener('keydown', closeModalEsc);
    backdrop.addEventListener('click', closeModalBackdrop);
  }

  function closeModal() {
    const activeEl = backdrop.querySelectorAll(".open-modal");
    Array.from(activeEl).map(item => item.classList.remove('open-modal'));
    backdrop.classList.add('is-hidden');
    document.body.classList.remove("scroll-hidden");
    document.removeEventListener('keydown', closeModalEsc);
    backdrop.removeEventListener('click', closeModalBackdrop);
  }

  function closeModalBackdrop(event) {
    if (event.target !== event.currentTarget) return;
    closeModal();
  }

  function closeModalEsc(event) {
    if (event.code !== "Escape") return;
    closeModal();
  }

  Array.from(btn).forEach(item => item.addEventListener('click', openModalProjects));
})();