export default function toggleAnswer(button) {
  button.addEventListener('click', () => {
    const answer = button.parentNode.querySelector('[data-js="card__answer"]');
    answer.classList.toggle('hidden');
    changeButtonText(button, answer);
  });
}

function changeButtonText(button, answer) {
  button.innerText = answer.classList.contains('hidden') ? 'Show Answer' : 'Hide Answer';
}
