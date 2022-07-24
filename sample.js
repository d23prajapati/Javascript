const button = document.getElementById('btn');
const total = document.getElementById('total');
var count = 0;

button.addEventListener('click', function handleClick(event) {
    const element = document.createElement('div');
    count++;
    element.textContent = "Count " + count;
    total.textContent = "Total Count : " + count;
    // element.style.backgroundColor = "yellow";
    element.style.height = '25px';
    element.style.margin = '2px';
    // element.style.width = '150px';
    // element.style.alignContent = "center";

    element.style.borderStyle = 'solid';
    element.style.borderColor = 'blue';
    element.style.margin = '10px';
    element.style.backgroundColor = "aqua";
    element.style.padding = '2px';

    const box = document.getElementById('box');
    box.append(element);
    console.log("Item clicked");
});