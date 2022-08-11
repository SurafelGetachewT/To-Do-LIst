export const saveLocal = (list) => {
  window.localStorage.setItem('localTasks', JSON.stringify(list));
};

export const status = (elem, list) => {
  list.forEach((task) => {
    if (task === elem) {
      task.isCompleted = !task.isCompleted;
    }
  });
  saveLocal(list);
};
