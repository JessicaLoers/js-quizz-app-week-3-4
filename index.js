import bookmark from './javascript/bookmark.js';
import counter from './javascript/counter.js';
import toggleAnswer from './javascript/toggleAnswer.js';
import navigation from './javascript/navigation.js';

const bookmarks = document.querySelectorAll('[data-js="bookmark"]');
bookmarks.forEach(bookmark);

const buttons = document.querySelectorAll('[data-js="card__button"]');
buttons.forEach(toggleAnswer);

const inputElements = document.querySelectorAll('[data-js="inputElement"]');
inputElements.forEach(counter);

const navElements = document.querySelectorAll('[data-js="nav-link"]');
navElements.forEach(navigation);
