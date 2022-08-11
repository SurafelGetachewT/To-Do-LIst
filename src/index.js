import './style.css';

const list = [
  {
    description: 'Wash Dishes',
    iscompleted: false,
    index: 0,
  },
  {
    description: 'Complete to do list project',
    iscompleted: false,
    index: 1,
  },
];

const todoList = () => {
  document.querySelector('.todo-list').innerHTML = '';
  list.forEach((item) => {
    const taskElement = document.createElement('li');
    taskElement.classList.add('task');
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.classList.add('task-check');
    taskElement.appendChild(checkbox);
    const taskText = document.createElement('input');
    taskText.classList = 'task-text';
    taskText.value = item.description;
    taskElement.appendChild(taskText);
    const dragIcon = document.createElement('button');
    dragIcon.classList = 'far fa-trash-alt deleteBtn';
    taskElement.appendChild(dragIcon);
    taskElement.draggable = 'true';
    document.querySelector('.todo-list').appendChild(taskElement);
  });
}

const onPageLoad = () => {
  todoList();
};

window.onload = onPageLoad();