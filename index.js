/*
let saveButton = document.getElementById("input-btn");

function saveInput() {
  console.log("Button Clicked!");
}

saveButton.addEventListener("click", function () {
  console.log("Button clicked!");
});
*/

// let openBox = document.getElementById("box");

// openBox.addEventListener("click", function () {
//   console.log("I want to open the box");
// });

let myLeads = ["www.lead.com", "www.greatlead.com", "www.coollead.com"];
let inputEl = document.getElementById("input-el");
let inputBtn = document.getElementById("input-btn");
const listEl = document.getElementById("list-el");

let listItems = "";

inputBtn.addEventListener("click", function () {
  myLeads.push(inputEl.value);
});

// Improving the performance of our app.

for (let i = 0; i < myLeads.length; i++) {
  // listEl.innerHTML += "<li>" + myLeads[i] + "</li>";

  // create element
  // set text content
  // append to ul

  listItems += "<li>" + myLeads[i] + "</li>";

  // const li = document.createElement("li");
  // li.textContent = myLeads[i];
  // listEl.append(li);
}

listEl.innerHTML = listItems;

console.log("Testing git");
console.log("Testing git2");
