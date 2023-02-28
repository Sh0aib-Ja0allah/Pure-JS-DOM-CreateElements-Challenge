// Start Form Creation ...
form = document.createElement("div");
form.style.border = "3px solid #f9004d";
form.style.borderRadius = "20px";
form.style.margin = "auto";
form.style.width = "350px";
form.style.height = "fit-content";
form.style.color = "#101010";
form.style.backgroundColor = "#191919";
form.style.padding = "30px 0 0 15px";
form.addEventListener("submit", (event) => {
  event.preventDefault(); // prevent default form submission behavior
  const formData = new FormData(event.target); // get form data
});

// create an input area to add the number ...
const input = document.createElement("input");
input.style.border = "3px solid #f9004d";
input.style.borderRadius = "20px";
input.placeholder = "Type number here..";
input.style.paddingLeft = "15px";
input.style.width = "90%";
input.style.height = "40px";
input.style.color = "#fff";
input.style.fontWeight = "600";
input.style.marginBottom = "25px";
input.style.fontSize = "16px";
input.style.letterSpacing = "1px";
input.style.backgroundColor = "transparent";
input.setAttribute("type", "number");
let inputValue = "";
input.addEventListener("input", (event) => {
  inputValue = event.target.value;
});
form.appendChild(input);

// create an input area to add the Text ...
inputT = document.createElement("input");
inputT.style.border = "3px solid #f9004d";
inputT.style.borderRadius = "20px";
inputT.placeholder = "Type the Description here..";
inputT.style.paddingLeft = "15px";
inputT.style.width = "90%";
inputT.style.height = "40px";
inputT.setAttribute("type", "text");
inputT.style.color = "#fff";
inputT.style.fontWeight = "600";
inputT.style.marginBottom = "25px";
inputT.style.fontSize = "16px";
inputT.style.letterSpacing = "1px";
inputT.style.backgroundColor = "transparent";
form.appendChild(inputT);

// create a DropDownList to add the Color ...
select = document.createElement("select");
select.style.border = "3px solid #f9004d";
select.style.borderRadius = "20px";
select.placeholder = "Type the Description here..";
select.style.paddingLeft = "15px";
select.style.width = "96%";
select.style.height = "45px";
select.style.color = "gray";
select.style.fontWeight = "600";
select.style.marginBottom = "25px";
select.style.fontSize = "16px";
select.value = "transparent";
select.style.letterSpacing = "1px";
select.style.backgroundColor = "transparent";
form.appendChild(select);

// Create The DropDownList Elements ...
// First Element ...
option1 = document.createElement("option");
option1.appendChild(document.createTextNode("Select wanted background color."));
select.appendChild(option1);
// Second Element ...
option2 = document.createElement("option");
option2.appendChild(document.createTextNode("red"));
option2.value = "#f9004d";
option2.style.backgroundColor = "#f9004d";
select.appendChild(option2);
// Third Element ...
option3 = document.createElement("option");
option3.appendChild(document.createTextNode("Sky- Blue"));
option3.value = "#4db5ff";
option3.style.backgroundColor = "#4db5ff";
select.appendChild(option3);
// Fourth Element ...
option4 = document.createElement("option");
option4.appendChild(document.createTextNode("gray"));
option4.value = "gray";
option4.style.backgroundColor = "gray";
select.appendChild(option4);
// Fifth Element ...
option5 = document.createElement("option");
option5.appendChild(document.createTextNode("green"));
option5.value = "green";
option5.style.backgroundColor = "green";
select.appendChild(option5);
// End of DropDownList Elements Creation ...

// Create a Submit Button ...
button = document.createElement("button");
button.style.border = "3px solid #f9004d";
button.style.borderRadius = "20px";
button.style.backgroundColor = "#f9004d";
button.style.paddingLeft = "15px";
button.style.width = "96%";
button.style.height = "45px";
button.style.color = "white";
button.style.fontWeight = "600";
button.style.marginBottom = "25px";
button.style.fontSize = "22px";
button.style.letterSpacing = "1px";
button.setAttribute("type", "submit");
button.appendChild(document.createTextNode("Submit"));
form.appendChild(button);

// Start of cards Creation ...
container = document.createElement("div");
container.style.display = "flex";
container.style.flexDirection = "row";
container.style.flexWrap = "wrap";
container.style.justifyContent = "space-evenly";
container.style.width = "100%";
container.style.marginTop = "10px";
container.style.height = "fi-content";

// for (let i = 1; i < inputValue; i++) {
for (let i = 1; i < 13; i++) {
  // Card Creation ...
  card = document.createElement("div");
  card.style.width = "30%";
  card.style.border = "3px solid #f9004d";
  card.style.borderRadius = "20px";
  card.style.margin = "15px";
  card.style.height = "fit-content";
  card.style.fontSize = "30px";
  card.style.textAlign = "center";
  card.style.color = "gray";
  card.style.padding = "10px 0";
  card.style.backgroundColor = "transparent";
  cardN = document.createElement("div");
  cardNumber = document.createTextNode(i);
  cardN.appendChild(cardNumber);
  cardN.style.fontSize = "40px";
  cardN.style.fontWeight = "800";
  cardN.style.color = "black";
  cardBr = document.createElement("br");
  cardText = document.createTextNode("card");
  card.appendChild(cardN);
  card.appendChild(cardText);
  container.appendChild(card);
}
// End of Cards Creation ...

// Start the body Creation ...
document.body.style.backgroundColor = "#101010";
document.body.style.border = "3px solid #f9004d";
document.body.style.padding = "70px 0";
document.body.style.borderRadius = "30px";
document.body.appendChild(form);
document.body.appendChild(container);
