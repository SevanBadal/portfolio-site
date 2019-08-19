import { scrollScreen } from '../actions/clicks';

function debounce(func, wait, immediate) {
  let timeout;
  return function () {
    let context = this, args = arguments;
    let later = function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    let callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
};

const myEfficientFn = debounce(function (e) {
    // print "false" if direction is down and "true" if up
  const bottomHalf = document.getElementById('bottom-half');
  const offset = bottomHalf.getBoundingClientRect().top
    if(offset >= 0) {
      this.oldScroll < this.scrollY && scrollScreen('bottom-half');
      this.oldScroll = this.scrollY;
    }
}, 50);

window.addEventListener('scroll', myEfficientFn);
