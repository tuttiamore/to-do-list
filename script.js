const addedListItems = [];


// function to create a new list item, display it on the page as well as push it to the addedListItems array
const addElementToList = () => {
  let newAddedItem = document.querySelector(".input-item").value
  addedListItems.push(newAddedItem)
  let newArticle = document.createElement("article")
  newArticle.setAttribute("class", "item")
  newArticle.innerHTML = (
      ` <div class="item-textfield">${newAddedItem}</div>
      <div class="button-wrapper">
        <button class="edit item-button">&#128393;</button>
        <button class="check item-button">&#128504;</button>
        <button class="delete item-button">&#10007;</button>
      </div>`
  )
  document.querySelector(".item-wrapper").prepend(newArticle)
}




let addButton = document.querySelector("#input-button")
// trigger function on click
addButton.addEventListener("click", addElementToList)




let inputField = document.querySelector(".input-item")
// trigger function on enter
inputField.addEventListener("keydown", (event) => {
  if (event.key === 'Enter') {
    addElementToList()
  } 
})
