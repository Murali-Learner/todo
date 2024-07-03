console.log("Before DOM content loaded");

function getCheckBoxes() {
  const checkboxes = document.querySelectorAll(
    '#todoList input[type="checkbox"]'
  );
  return checkboxes;
}

document.addEventListener("DOMContentLoaded", () => {
  //TODO: add listener to checkboxes
  var checkbox = document.querySelector("input[type=checkbox]");

  if (checkbox !== null) {
    checkbox.addEventListener("change", () => {
      console.log(`checked ${checkbox.checked} ${checkbox.id}`);
    });
  }

  //TODO: Add onclick listener to the button
  const button = document.getElementById("todoButton");
  console.log("button clicked ", [button]);
  button.addEventListener("click", () => {
    // Get input text
    const newTodoValue = document.getElementById("todoInput").value;
    if (newTodoValue.length === 0) {
      alert("Input value shouldn't be EMPTY");
      return;
    }

    //TODO: Create new checkbox element from input value
    const newTodoElement = document.createElement("input");
    newTodoElement.type = "checkbox";
    newTodoElement.name = "todo";
    newTodoElement.value = newTodoValue;
    newTodoElement.id = "todo" + new Date().getTime();

    //TODO: Create a new todo label
    const label = document.createElement("label");
    label.htmlFor = newTodoElement.id;
    label.appendChild(document.createTextNode(` ${newTodoValue}`));

    // Create a new list item and append the checkbox and label to it
    const listItem = document.createElement("li");
    listItem.appendChild(newTodoElement);
    listItem.appendChild(label);

    //TODO: Append the new list item to the existing TODO list
    document.getElementById("todoList").appendChild(listItem);
    console.log("newTodoElement", newTodoElement);
    //TODO: Clear the input value
    document.getElementById("todoInput").value = "";

    //TODO: Add event listener to the new checkbox
    newTodoElement.addEventListener("change", () => {
      if (newTodoElement.checked) {
        (label.style.textDecoration = "line-through"),
          console.log("Checked checkbox value:", [
            newTodoElement.value,
            newTodoElement.id,
            label.style.textDecoration,
          ]);
      } else {
        label.style.textDecoration = "";
      }
    });
  });
});
