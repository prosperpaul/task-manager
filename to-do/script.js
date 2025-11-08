

let itemCount=0;

function addItems() {
  const listItem = document.getElementById('listItems');
  const newItem = document.createElement('li');
  newItem.textContent = document.getElementById('inputTask').value;
  listItem.appendChild(newItem);
  itemCount++;
 
}


function removeItems() {
  const listItem = document.getElementById('listItems');
  const newItem = document.createElement('li');
  newItem.textContent = document.getElementById('inputTask').value;
   listItem.removeChild(listItem.lastElementChild);
  itemCount--;
}
 
