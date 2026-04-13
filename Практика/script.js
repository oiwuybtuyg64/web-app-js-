console.log(helloFromLogic());

const brick1 = document.getElementById('message');
brick1.textContent = "DOM seems to work!";

const brick2 = document.getElementById('demoList');

const line1 = document.createElement('p');
line1.textContent = "First line!";
brick2.appendChild(line1);

const line2 = document.createElement('p');
line2.textContent = "Second line!";
brick2.appendChild(line2);

const line3 = document.createElement('p');
line3.textContent = "Third line!";
brick2.appendChild(line3);