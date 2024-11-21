const button = document.querySelector("#button");
// collects the button from the HTML or DOM and gives it a variable
const input = document.querySelector("#input");
// collects the input field from the DOM and gives it a variable

let index = 0;
function getInput() {
  // creates a function that gets the input and
  // creates a list item within the div from the DOM
  // and adds the text from the input field to the list.
  let node = document.createElement("li");
  // creates a new list item
  let parent = document.querySelector("div");
  // collects the div from the DOM and gives it a variable
  node.textContent = input.value;
  // adds the text from the input field to the list item
  node.id = index;
  // gives the list item an id
  parent.appendChild(node);
  // adds the list item to the div
  input.value = "";
  // empties the input field
  index++;
  // ensures that for each list element that is created,
  // it gets an id that is one more than the previous one
}
const red = (button.style.backgroundColor = "red");
// sets the backgcround color of the button to red
const blue = (button.style.backgroundColor = "blue");
// // sets the backgcround color of the button to blue

button.addEventListener("click", getInput());
// adds an event listener to the button that listens for a click
// and when it is clicked, it calls the getInput function.

document.addEventListener("click", (event) => {
  // checks for a click event in the DOM overall
  if (event.target.nodeName === "LI") {
    // checks if the click event was on a list item
    let temp = document.getElementById(event.target.id);
    // collects the list item that was clicked and gives it a variable
    temp.textContent = input.value;
    // replaces the clicked list items with the value in the input field
    // temp.textContent = ""
    // empties the list item or replaces it with a string
  }
});

input.addEventListener("keydown", (enter) => {
  // checks for a keydown event in the input field
  if (enter.key === "Enter") {
    // checks if the enter key was pressed
    if (input.value !== "") {
      // checks if the input field is not empty
      getInput();
      // runst the getInput function
    }
  }
});
