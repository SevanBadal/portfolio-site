import { scrollScreen } from '../actions/clicks';

function debounce(func, wait, immediate) {
  let timeout;
  return function () {
    const context = this, args = arguments;
    const later = function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    const callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
};

const myEfficientFn = debounce(function (e) {
  const bottomHalf = document.getElementById('bottom-half');
  const offset = bottomHalf.getBoundingClientRect().top
  const inFocus = document.activeElement.tagName === 'BODY';
    if(offset >= 0 && inFocus) {
      this.oldScroll < this.scrollY && scrollScreen('bottom-half');
    }
    if (offset >= 100 && inFocus) {
      this.oldScroll > this.scrollY && scrollScreen('top-half');
    }
    this.oldScroll = this.scrollY;
}, 75);

// window.addEventListener('scroll', myEfficientFn);
