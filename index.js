// Write your code here!

document.querySelector("main#main").remove();

const newHeader = document.createElement("h1");
newHeader.id = "victory"
newHeader.innerHTML = "X is the champion!";
document.body.append(newHeader)
