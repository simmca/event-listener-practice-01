let allItemsIncomplete = true;
const pageTitle = 'List of Common Painting Steps';
const groceries = [
  { id: 1, name: 'Prime', completed: false },
  { id: 2, name: 'Basecoat', completed: false },
  { id: 3, name: 'Shade', completed: false },
  { id: 4, name: 'Highlight', completed: false },
  { id: 5, name: 'Highlight More', completed: false },
  { id: 6, name: 'Highlight Even More', completed: false },
  { id: 7, name: 'Clearcoat', completed: false },
];

function setPageTitle() {
  const title = document.getElementById('title');
  title.innerText = pageTitle;
}

function displayGroceries() {
  const ul = document.querySelector('ul');
  groceries.forEach((item) => {
    const liElement = document.createElement('li');
    liElement.innerText = item.name;
    liElement.classList.add('list-item');
    const checkCircle = document.createElement('i');
    checkCircle.setAttribute('class', 'far fa-check-circle');
    liElement.appendChild(checkCircle);
    liElement.addEventListener('click', (event) => {
      liElement.classList.add('completed');
      checkCircle.classList.add('completed');
    });
    liElement.addEventListener('dblclick', (event) => {
      liElement.classList.remove('completed');
      checkCircle.classList.remove('completed');
    });
    ul.appendChild(liElement);
  });
}

document.addEventListener('DOMContentLoaded', () => {
  displayGroceries();
  setPageTitle();
  let button = document.getElementById('toggleAll');
  button.addEventListener('click', (event) => {
    allItemsIncomplete = !allItemsIncomplete;
    if (allItemsIncomplete){
      button.innerText = 'Mark All Complete';
    } else {
      button.innerText = 'Mark All Incomplete';
    }
    const listItems = document.querySelectorAll('.list-item');
    listItems.forEach(item => {
      if (allItemsIncomplete){
        item.classList.remove('completed');
      } else {
        item.classList.add('completed');
      }
    });
  });
});