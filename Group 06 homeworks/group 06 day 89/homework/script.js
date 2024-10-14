function addItem() {
    // 1. Get the input element by its ID
    let input = document.getElementById("input1");

    // 2. Get the value entered in the input field
    let inputValue = input.value;

    // 3. Check if the input is not empty
    if (inputValue.trim() !== "") {
      // 4. Get the list element
      let ul = document.getElementById("list1");

      // 5. Create a new list item element
      let li = document.createElement("li");

      // 6. Set the text content of the new list item to the input value
      li.textContent = inputValue;

      // 7. Append the new list item to the list
      ul.appendChild(li);

      // 8. Clear the input field after adding the item
      input.value = "";
    } else {
      alert("Please enter a valid item");
    }
}
btn.addEventListener("click", todoList)