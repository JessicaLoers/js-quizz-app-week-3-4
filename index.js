// 1. Toggle all bookmarks with forEach
const bookmarks = document.querySelectorAll('[data-js="bookmark"]');
bookmarks.forEach((bookmark) => {
  bookmark.addEventListener('click', () => {
    bookmark.classList.toggle('card__bookmark--active');
  });
});

// 2. Toggle all answers with forEach
const buttons = document.querySelectorAll('[data-js="show__button"]');
// ** --- Variante 1 --- **
const answers = document.querySelectorAll('.question-card__answer');
buttons.forEach((button, index) => {
  button.addEventListener('click', () => {
    answers[index].classList.toggle('hidden');
    button.innerText = answers[index].classList.contains('hidden') ? 'Show Answer' : 'Hide Answer';
  });
});

// 3. Implement Counter for create form inputs
const inputElements = document.querySelectorAll('[data-js="inputElement"]');

inputElements.forEach((element) => {
  const inputField = element.querySelector('[data-js="inputTextarea"]');
  const counterElement = element.querySelector('[data-js="form-counter"]');

  inputField.addEventListener('input', () => {
    inputField.value.length >= 0
      ? (counterElement.textContent = `${inputField.value.length} characters`)
      : (counterElement.textContent = '');
  });
});

// 4. Navigation Single Page App (SPA)
const navElements = document.querySelectorAll('[data-js="nav-link"]');
const pages = document.querySelectorAll('.page');

navElements.forEach((navElement) => {
  navElement.addEventListener('click', (event) => {
    pages.forEach((page) => {
      page.classList.remove('active');
    });
    const hrefAttribute = event.target.parentElement.getAttribute('href');
    const activePage = document.querySelector(hrefAttribute);
    activePage.classList.add('active');
  });
});
