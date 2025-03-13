function scrollTo(e) {
  e.preventDefault();
  const reference = document.querySelector(e.target.dataset.scrollTo);
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
