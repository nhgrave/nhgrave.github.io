function scrollTo(e) {
  e.preventDefault();
  let target = e.target;
  if (!e.target.dataset.scrollTo) target = e.target.closest('[data-scroll-to]');
  const reference = document.querySelector(target.dataset.scrollTo);
  if (reference) reference.scrollIntoView({ behavior: 'smooth' });
}

function mounted(el, binding) {
  el.dataset.scrollTo = binding.value;
  el.addEventListener('click', scrollTo);
};

function beforeUnmount(el) {
  el.removeEventListener('click', scrollTo);
}

export default {
  install(app) {
    app.directive('scroll-to', {
      mounted,
      beforeUnmount
    });
  }
}
