const root = document.getElementById('root');

let count = 0;

const title = document.createElement('h1');
title.classList.add('title');
title.innerText = 'Did It Work?';

const para = document.createElement('p');
para.classList.add('para');
para.innerText = 'If you click the button below and the counter increases, then everything is running smoothly.';

const counter = document.createElement('span');
counter.classList.add('counter');
counter.innerText = count;

const increaseCount = () => {
  count++;

  counter.innerText = count;
  if (title.innerText === 'Did It Work?') title.innerText = 'It Worked!';
}

const btn = document.createElement('button');
btn.type = 'button';
btn.classList.add('btn');
btn.innerText = 'INCREASE';

btn.addEventListener('click', () => increaseCount());

root.appendChild(title);
root.appendChild(para);
root.appendChild(btn);
root.appendChild(counter);
