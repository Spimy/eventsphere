const setupModals = () => {
  const modalButtons = document.querySelectorAll('button[data-modal]');

  modalButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const modalName = button.getAttribute('data-modal');
      const modal = document.querySelector(`.modal[data-modal="${modalName}"]`);
      if (!modal) return;

      modal.setAttribute('data-open', 'true');

      modal
        .querySelector('button[role="menuitem"]')
        .addEventListener('click', () => modal.removeAttribute('data-open'), {
          once: true
        });
    });
  });
};

setupModals();
