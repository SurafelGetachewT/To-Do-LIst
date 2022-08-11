import * as task from './populate.js';
import './style.css';

let list = [];
const listEl = document.querySelector('ul');

const todoList = () => {
  if (window.localStorage.getItem('localTasks')) {
    const localTasks = window.localStorage.getItem('localTasks');
    list = JSON.parse(localTasks);
  }
  document.querySelector('.todo-list').innerHTML = '';
  list.forEach((item) => {
    const taskElement = document.createElement('li');
    taskElement.classList.add('task');
    if (item.isCompleted) {
      taskElement.classList.add('completed');
    }
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.classList.add('task-check');
    checkbox.checked = item.isCompleted;
    taskElement.appendChild(checkbox);
    const taskText = document.createElement('input');
    taskText.classList = 'task-text';
    taskText.value = item.description;
    taskText.addEventListener('change', () => {
      if (taskText.value.length > 0) {
        item.description = taskText.value;
        task.saveLocal(list);
      }
    });
    taskElement.appendChild(taskText);

    const dragIcon = document.createElement('button');
    dragIcon.classList = 'far fa-trash-alt deleteBtn';
    taskElement.appendChild(dragIcon);
    taskElement.draggable = 'true';
    document.querySelector('.todo-list').appendChild(taskElement);
  });
};

const removeItem = (e) => {
  if (!e.target.classList.contains('deleteBtn')) {
    return;
  }
  const btn = e.target;
  list.forEach((task) => {
    if (task.description === btn.parentElement.children[1].value) {
      list.splice(list.indexOf(task), 1);
    }
  });
  btn.closest('li').remove();
  task.updateIndex(list);
  task.saveLocal(list);
};

listEl.addEventListener('click', removeItem);
todoList();
document.querySelector('#taskForm').addEventListener('submit', (event) => {
  event.preventDefault();
  task.add(list);
  todoList();
});
