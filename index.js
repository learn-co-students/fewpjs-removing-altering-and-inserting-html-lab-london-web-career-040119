// Write your code here!

var element = document.createElement('div');

document.body.appendChild(element);

var ul = document.createElement('ul');
 
for (let i = 0; i < 3; i++) {
  let li = document.createElement('li');
  li.innerHTML = (i + 1).toString();
  ul.appendChild(li);
};
 
element.appendChild(ul);

document.querySelector('main').remove();

var newHeader = document.createElement('h1');
newHeader.setAttribute("id", "victory");
var name = 'Harriet';

newHeader.innerHTML = `${name} is the champion`;

document.querySelector('body').appendChild(newHeader)
