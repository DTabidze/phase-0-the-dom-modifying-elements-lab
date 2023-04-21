// Write your code here!
const mainID = document.getElementById("main");
mainID.remove();
const newHeader = document.createElement("h1");
//headerOne.textContent = "newHeader";
newHeader.id = "victory";
//const newHeaderID = document.getElementById("victory");
newHeader.textContent = "Davit is the champion";
document.body.append(newHeader);
