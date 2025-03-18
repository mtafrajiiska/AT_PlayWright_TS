// get element by tag name
document.getElementsByTagName("h1")[0];
//get h1 tag by css selector
//document.querySelector("#list")
document.querySelector("h1");
//create DOM element
var paragraph = document.createElement("p");
paragraph.textContent = "This is our created paragraph";
// get element by class name
var addItemsContent = document.getElementsByClassName("add-items");
console.log("addItemsContent", addItemsContent);
// append element in the html structure
addItemsContent[0].append(paragraph);
//remove element
var spanEl = document.getElementsByTagName("span")[0];
spanEl.remove();
