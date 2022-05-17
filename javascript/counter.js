export default function counter(element) {
  const inputField = element.querySelector('[data-js="inputTextarea"]');
  const counterElement = element.querySelector('[data-js="form-counter"]');

  inputField.addEventListener('input', () => {
    inputField.value.length >= 0
      ? (counterElement.textContent = `${inputField.value.length} characters`)
      : (counterElement.textContent = '');
  });
}
