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
  editButtons.forEach((button, index) =>
    button.addEventListener("click", clickEdit)
  );
  itemsTextfield.forEach((button) =>
    button.addEventListener("blur", leaveEdit)
  );
}

editItemsWrapper();

// // Try out: Add new item
// const addButton = document.querySelector(".input-button");

// function addElement() {
//   let mainList = document.querySelector(".item-wrapper");
//   let newItem = listItems[0].cloneNode(true);
//   let newInput = document.querySelector(".input-item").value;
//   newItem.firstElementChild.textContent = newInput;
//   mainList.append(newItem);
//   editItemsWrapper();
// }

// addButton.addEventListener("click", addElement);

const addedListItems = [];

const itemWrapper = document.querySelector(".item-wrapper");

// create new article with the user inserted item and display it on the page
function addElementToArrayandPageList() {
  let newAddedItem = document.querySelector(".input-item").value;
  addedListItems.push(newAddedItem);
  const itemTemplate = `
          <article class="item">
              <div class="item-textfield">${newAddedItem}</div>
              <div class="button-wrapper">
                <button class="edit item-button">&#128393;</button>
                <button class="check item-button">&#128504;</button>
                <button class="delete item-button">&#10007;</button>
              </div>
              </article>`;
  itemWrapper.insertAdjacentHTML("afterbegin", itemTemplate);
}

let addButton = document.querySelector("#input-button");

// trigger function on click
addButton.addEventListener("click", addElementToArrayandPageList);

let inputField = document.querySelector(".input-item");

const onEnter = (event) => {
  if (event.key === "Enter") {
    addElementToArrayandPageList();
  }
};
// trigger function on enter
inputField.addEventListener("keydown", onEnter);
