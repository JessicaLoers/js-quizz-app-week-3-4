// PART 1 -- EXERCISE 1
const bookmark = document.querySelector('[data-js="bookmark"]');

bookmark.addEventListener("click", () => {
  bookmark.classList.toggle("card__bookmark--active");
});

// PART 1 -- EXERCISE 2 / 3
// const showButton = document.querySelector('[data-js="show__button"]');
// const answerElement = document.querySelector('[data-js="answer"]');

// showButton.addEventListener("click", () => {
//   answerElement.toggleAttribute("hidden");
// });

// PART 1 -- EXERCISE  3
// const showButton = document.querySelector('[data-js="show__button"]');
// const hideButton = document.querySelector('[data-js="hide__button"]');
// const answerElement = document.querySelector('[data-js="answer"]');

// showButton.addEventListener("click", () => {
//   hideButton.classList.remove("hide");
//   showButton.classList.add("hide");
//   answerElement.toggleAttribute("hidden");
// });

// hideButton.addEventListener("click", () => {
//   hideButton.classList.add("hide");
//   showButton.classList.remove("hide");
//   answerElement.toggleAttribute("hidden");
// });

// PART 1 -- EXERCISE  3 --optional Solution with single Button
const showButton = document.querySelector('[data-js="show__button"]');
const answerElement = document.querySelector('[data-js="answer"]');

showButton.addEventListener("click", () => {
  if (showButton.textContent === "Show") {
    answerElement.toggleAttribute("hidden");
    showButton.textContent = "Hide";
  } else {
    showButton.textContent = "Show";
    answerElement.toggleAttribute("hidden");
  }
});
