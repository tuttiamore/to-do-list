// Edit function
// Steps involved:
// 1. onclick: grab the correct item from the array
//  1.1 focus element and enable editing (contentEditable=true)
//  1.2 when element loses focus, update array with new info

// get all list items
let listItems = document.querySelectorAll(".item");

// get textfields to be edited
const itemsTextfield = document.querySelectorAll(".item-textfield");

// get edit buttons
const editButtons = document.querySelectorAll(".edit");

// function for making item textfields editable on click
function clickEdit() {
  this.parentElement.previousElementSibling.contentEditable = "true";
  this.parentElement.previousElementSibling.focus();
}

// function for saving changes
function leaveEdit() {
  this.contentEditable = "false";
  listItems = document.querySelectorAll(".item");
  console.log(listItems[0].firstElementChild.innerHTML);
}

editButtons.forEach((button) => button.addEventListener("click", clickEdit));
itemsTextfield.forEach((button) => button.addEventListener("blur", leaveEdit));
console.log(listItems);
