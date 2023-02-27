/*
--mainColor: #f9004d;
--blackColor: #101010;
--blackColor2: #191919;
--grayColor: hsla(0,0%,100%,0.6);
--skyColor: #4db5ff;
--whiteColor: #fff;
*/
// Start Form Creation ...
form = document.createElement("div");
form.style.border = "3px solid #f9004d";
form.style.borderRadius = "20px";
form.style.margin = "auto";
form.style.width = "350px";
form.style.height = "fit-content";
// form.style.height = "400px";
form.style.color = "#101010";
form.style.backgroundColor = "#191919";
form.style.padding = "30px 0 0 15px";
// create an input area to add the number ...
inputN = document.createElement("input");
inputN.style.border = "3px solid #f9004d";
inputN.style.borderRadius = "20px";
inputN.type = "number";
inputN.placeholder = "Type number here..";
inputN.style.paddingLeft = "15px";
inputN.style.width = "90%";
inputN.style.height = "40px";
inputN.style.color = "#fff";
inputN.style.fontWeight = "600";
inputN.style.marginBottom = "25px";
inputN.style.fontSize = "16px";
inputN.style.letterSpacing = "1px";
let n = inputN.value;
inputN.style.backgroundColor = "transparent";
form.appendChild(inputN);
// create an input area to add the Text ...
inputT = document.createElement("input");
inputT.style.border = "3px solid #f9004d";
inputT.style.borderRadius = "20px";
inputT.placeholder = "Type the Description here..";
inputT.style.paddingLeft = "15px";
inputT.style.width = "90%";
inputT.style.height = "40px";
inputT.type = "text";
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
select.style.letterSpacing = "1px";
select.style.backgroundColor = "transparent";
form.appendChild(select);
// Create The DropDownList Elements ...
// First Element ...
option1 = document.createElement("option");
option1.appendChild(document.createTextNode("Select your wanted color."));
select.appendChild(option1);
// Second Element ...
option2 = document.createElement("option");
// option2.appendChild(document.createTextNode("red"));
option2.style.backgroundColor = "#f9004d";
select.appendChild(option2);
// Third Element ...
option3 = document.createElement("option");
// option3.appendChild(document.createTextNode("Sky- Blue"));
option3.style.backgroundColor = "#4db5ff";
select.appendChild(option3);
// Fourth Element ...
option4 = document.createElement("option");
// option4.appendChild(document.createTextNode("gray"));
option4.style.backgroundColor = "gray";
select.appendChild(option4);
// Fifth Element ...
option5 = document.createElement("option");
// option5.appendChild(document.createTextNode("green"));
option5.style.backgroundColor = "green";
select.appendChild(option5);
// End of DropDownList Elements Creation ...

// Create a Submit Button ...
button = document.createElement("button");
button.style.border = "3px solid #f9004d";
button.style.borderRadius = "20px";
button.style.backgroundColor = "#f9004d";
button.appendChild(document.createTextNode("Submit"));
button.style.paddingLeft = "15px";
button.style.width = "96%";
button.style.height = "45px";
button.style.color = "white";
button.style.fontWeight = "600";
button.style.marginBottom = "25px";
button.style.fontSize = "22px";
button.style.letterSpacing = "1px";
button.type = "button";
button.onclick = "SubmitData()";
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

for (let i = 1; i < n; i++) {
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

function SubmitData(NumberValue) {
  n = inputN.value;
  card.style.backgroundColor = select.value;
}

// Start the body Creation ...
document.body.style.backgroundColor = "#101010";
document.body.style.border = "3px solid #f9004d";
document.body.style.padding = "70px 0";
document.body.style.borderRadius = "30px";
document.body.appendChild(form);
document.body.appendChild(container);
