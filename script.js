const form = document.getElementById('form');
const display = document.getElementById('display');
const dice = document.getElementById('dice');
const coupon = document.getElementById('coupon');

const img1 = document.getElementById('img1');
const img2 = document.getElementById('img2');
const img3 = document.getElementById('img3');
const img4 = document.getElementById('img4');

let name, email, username;
let sum = 0;
let count = 0;

img1.addEventListener('click', () => {
  form.style.display = 'block';
});

form.addEventListener('submit', (event) => {
  event.preventDefault();
  name = document.getElementById('name').value;
  email = document.getElementById('email').value;
  username = document.getElementById('username').value;
  form.style.display = 'none';
});

img2.addEventListener('click', () => {
  display.style.display = 'block';
  display.innerHTML = `<p>Name: ${name}</p><p>Username: ${username}</p>`;
});

img3.addEventListener('click', () => {
  dice.style.display = 'block';
});

dice.addEventListener('click', () => {
  if (count < 3) {
    const result = Math.floor(Math.random() * 6) + 1;
    document.getElementById('result').innerHTML = result;
    sum += result;
    count++;
  }
  if (count === 3 && sum <= 10) {
    alert('Please try again after scoring more than 10');
  }
  if (count === 3 && sum > 10) {
    dice.style.display = 'none';
    img4.style.display = 'block';
  }
});

img4.addEventListener('click', () => {
  const text = Math.random().toString(36).substring(2, 14) + Math.random().toString(36).substring(2, 14);
  coupon.style.display = 'block';
  coupon.innerHTML = `<p>Coupon: ${text}</p>`;
});



let currentImage = 1;
let attempts = 0;

img1.addEventListener('click', () => {
  if (currentImage === 1) {
    form.style.display = 'block';
    currentImage++;
  }
});

document.getElementById('submit').addEventListener('click', () => {
  const name = document.getElementById('name').value;
  const username = document.getElementById('username').value;
  form.style.display = 'none';
});

img2.addEventListener('click', () => {
  if (currentImage === 2) {
    display.style.display = 'block';
    display.innerHTML = `<p>Name: ${name}</p><p>Username: ${username}</p>`;
    currentImage++;
  }
});

img3.addEventListener('click', () => {
  if (currentImage === 3) {
    dice.style.display = 'block';
    currentImage++;
  }
});

dice.addEventListener('click', () => {
  if (count < 3) {
    const result = Math.floor(Math.random() * 6) + 1;
    document.getElementById('result').innerHTML = result;
    sum += result;
    count++;
  }
  if (count === 3 && sum <= 10 && attempts < 2) {
    alert('Please try again after scoring more than 10');
    attempts++;
    count = 0;
    sum = 0;
  }
  if (count === 3 && sum > 10) {
    dice.style.display = 'none';
    img4.style.display = 'block';
  }
  if (attempts === 2 && sum <= 10) {
    alert('Bad luck');
  }
});

img4.addEventListener('click', () => {
  if (currentImage === 4) {
    const text = Math.random().toString(36).substring(2, 14) + Math.random().toString(36).substring(2, 14);
    coupon.style.display = 'block';
    coupon.innerHTML = `<p>Coupon: ${text}</p>`;
    currentImage++;
  }
});


