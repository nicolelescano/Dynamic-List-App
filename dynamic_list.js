var button = document.getElementById('inputItem'); //the add item button
var ul = document.getElementById('dots'); //the list


function runresponse() { //creates the list
    var storeinput = document.getElementById('inputitem').value;
    var item = document.createElement('li');
    item.textContent = storeinput;
    ul.appendChild(item);



button.addEventListener('click', runresponse);
