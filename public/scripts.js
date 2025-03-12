function scrollTo(e) {
  e.preventDefault();

  const reference = document.querySelector(e.target.getAttribute('data-scroll-to'));
  if (reference) reference.scrollIntoView({ behavior: 'smooth' });
}

document.querySelectorAll('[data-scroll-to]').forEach(($el) => {
  $el.addEventListener('click', scrollTo);
});
