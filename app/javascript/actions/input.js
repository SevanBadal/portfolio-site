import { scrollScreen } from './clicks';

document.querySelector('.text-input').addEventListener('focus', () => {
  scrollScreen();
});
