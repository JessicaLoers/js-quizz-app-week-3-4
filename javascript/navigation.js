export default function navigation(navElement) {
  const pages = document.querySelectorAll('.page');

  navElement.addEventListener('click', (event) => {
    pages.forEach((page) => {
      page.classList.remove('active');
    });
    const hrefAttribute = event.target.parentElement.getAttribute('href');
    const activePage = document.querySelector(hrefAttribute);
    activePage.classList.add('active');
  });
}
