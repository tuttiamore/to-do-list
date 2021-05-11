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
