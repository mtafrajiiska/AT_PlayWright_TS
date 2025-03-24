// Add event listener when button with id "add-border-btn" is clicked
// and add border style "2px solid red" for section with class name "content"

const addBorderBtn = document.getElementById(
  "add-border-btn"
) as HTMLButtonElement;
const contentSection = document.querySelector(".content") as HTMLElement;

addBorderBtn.addEventListener("click", (event: MouseEvent) => {
  contentSection.style.border = "2px solid red";
});

// Add event listener when button with id "change-text-btn" is clicked
// and add color style "blue" for section with class name "content"
const changeTextBtn = document.getElementById(
  "change-text-btn"
) as HTMLButtonElement;
const contentSection2 = document.querySelector(".content") as HTMLElement;

changeTextBtn.addEventListener("click", (event: MouseEvent) => {
  contentSection2.style.color = "blue";
  //contentSection2.style.backgroundColor = "gray";
});

// Add event listener when button with id "change-text-btn" is clicked
// and add backgroundColor style "gray" for section with class name "content"
const changeTextBtn2 = document.getElementById(
  "change-text-btn"
) as HTMLButtonElement;
const contentSection3 = document.querySelector(".content") as HTMLElement;

changeTextBtn2.addEventListener("click", (event: MouseEvent) => {
  contentSection3.style.backgroundColor = "gray";
});

//Add event listener when section element with class name "content" is hovered
// this means to use mouseover event type
// and add box-shadow style  12px 12px 2px 1px rgba(0, 0, 255, 0.2);
const contentSection4 = document.querySelector(".content") as HTMLElement;

contentSection4.addEventListener("mouseover", () => {
  contentSection4.style.boxShadow = "12px 12px 2px 1px rgba(0, 0, 255, 0.2)";
});
