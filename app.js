const randomBtn = document.getElementById('randomBtn');
const placeholder = document.getElementById('placeholder');
const inpFood = document.getElementById('inpFood');
const resultPopup = document.querySelector('#result-popup');
const result = document.querySelector('#result-target');
const blocker = document.querySelector('#blocker');
const iconButton = document.querySelector('#icon-button');

randomBtn.onclick = () => {
  const list_food = inpFood.textContent.split(/\s*,\s*/g);
  const random_value = list_food[Math.floor(Math.random() * list_food.length)];

  /* Popup Result */
  result.innerHTML = random_value;
  blocker.className = "open";
  resultPopup.className = "open";
}

placeholder.onmouseover = () => {
  placeholder.style.zIndex = -1;
};

inpFood.oninput = () => {
  if(!inpFood.textContent) {
    randomBtn.className = "disabled";
    placeholder.hidden = false;
  } else {
    randomBtn.className = "";
    placeholder.hidden = true;
  }
}

blocker.onclick = () => {
  resultPopup.className = "close";
  blocker.className = "close";
};

iconButton.onclick = () => {
  resultPopup.className = "close";
  blocker.className = "close";
};