import { saveLocal } from './status.js';

export const add = (list) => {
  list.push({ description: document.querySelector('#newTask').value, isCompleted: false, index: list.length + 1 });
  document.querySelector('#newTask').value = '';
  saveLocal(list);
};

export const updateIndex = (list) => {
  let i = 1;
  list.forEach((elem) => {
    elem.index = i;
    i += 1;
  });
};

export const removeDone = (list) => {
  list = list.filter((elem) => elem.isCompleted === false);
  updateIndex(list);
  saveLocal(list);
}
