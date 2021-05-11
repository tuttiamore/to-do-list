// Edit function
// Steps involved:
// 1. onclick: grab the correct item from the array
//  1.1 focus element and enable editing (contentEditable=true)
//  1.2 when element loses focus, update array with new info

// get all list items
let listItems = document.querySelectorAll(".item");

// function for making item textfields editable on click
function clickEdit() {
  this.parentElement.previousElementSibling.contentEditable = "true";
  this.parentElement.previousElementSibling.focus();
}

// function for saving changes: make textfield not editable and update array
function leaveEdit() {
  this.contentEditable = "false";
  listItems = document.querySelectorAll(".item");
}

function editItemsWrapper() {
  // get textfields to be edited
  let itemsTextfield = document.querySelectorAll(".item-textfield");

  // get edit buttons
  let editButtons = document.querySelectorAll(".edit");

  //add event listener and tasks
  editButtons.forEach((button) => button.addEventListener("click", clickEdit));
  itemsTextfield.forEach((button) =>
    button.addEventListener("blur", leaveEdit)
  );

  //save changes, i.e. update itemList
  document.querySelectorAll(".item");
}

editItemsWrapper();

// Try out: Add new item
// const addButton = document.querySelector(".input-button");

// function addElement() {
//   let mainList = document.querySelector(".item-wrapper");
//   let newItem = listItems[0].cloneNode(true);
//   let newInput = document.querySelector(".input-item").innerHTML;
//          selecting innerHTML from input elements doesn't work
//   newItem.firstElementChild.innerHTML = "newInput";
//   mainList.append(newItem);
//   editItemsWrapper();
// }

// addButton.addEventListener("click", addElement);
