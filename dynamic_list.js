var button = document.getElementById('inputItem');
var ul = document.getElementsByTagName('ul');



function runresponse() {
    var storeinput = document.getElementById('inputitem').value;
    var item = document.createElement('li');
    item.textContent = storeinput;
    ul.appendChild(item)
}

button.addEventListener('click', runresponse);
