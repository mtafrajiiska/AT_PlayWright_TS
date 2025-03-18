// Change the text of h1 tag
var headingOne = document.querySelector("h1");
headingOne.textContent = "Welcome to TypeScript Dom Manipulation Homework";
// Change the color of the paragraph inside div.content
var divContent = document.querySelector("div");
divContent.style.color = "blue";
//const listItem = document.getElementsByClassName("li")[0,1,2];
// Change the list items textContent for example to be list of fruits.
// const fruit1 = document.querySelector("li") as HTMLElement;
// fruit1.textContent = "Banana";
// const listItems1: HTMLElement = document.getElementsByTagName("li")[0];
// listItems1.textContent = "Cherry";
// const listItems2: HTMLUListElement = document.getElementsByTagName("li")[1];
// listItems2.textContent = "Orange";
// const listItems3: Element = document.getElementsByTagName("li")[2];
// listItems3.textContent = "Banana";
var listItems = document.querySelectorAll("li");
listItems[0].textContent = "Banana";
listItems[1].textContent = "Cherry";
listItems[2].textContent = "Orange";
//Add a button and apply border style "1px solid red" to it.
var newBtn = document.querySelector(".new button");
newBtn.style.border = "1px solid red";
console.log("newBtn", newBtn);
