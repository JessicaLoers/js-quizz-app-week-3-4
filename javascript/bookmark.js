export default function bookmark(bookmark) {
  bookmark.addEventListener('click', () => {
    bookmark.classList.toggle('card__bookmark--active');
  });
}
