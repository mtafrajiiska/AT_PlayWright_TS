// Change the text of h1 tag
const headingOne = document.querySelector("h1") as HTMLHeadingElement;
headingOne.textContent = "Welcome to TypeScript Dom Manipulation Homework";

// Change the color of the paragraph inside div.content
const divContent = document.querySelector("div") as HTMLDivElement;
divContent.style.color = "blue";

// Change the list items textContent for example to be list of fruits.

const listItems = document.querySelectorAll("li") as NodeListOf<HTMLLIElement>;

listItems[0].textContent = "Banana";
listItems[1].textContent = "Cherry";
listItems[2].textContent = "Orange";

//Add a button and apply border style "1px solid red" to it.
const newBtn = document.querySelector(".new button") as HTMLButtonElement;
if (newBtn) {
  newBtn.style.border = "1px solid red";
  console.log("newBtn", newBtn);
}
