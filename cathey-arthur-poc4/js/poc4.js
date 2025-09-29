'use strict';

// Heading text setup
  //  Get the H1 and store the element in a variable.
  //  Get the form and store the element in a variable.
  //  Get the ranger slider field and store the element in a variable.
  //  Get the span tag (by its ID) and store the element in a variable.
const heading = document.querySelector('h1');        
const form = document.querySelector('form');          
const slider = document.querySelector('#text-size');  
const sizeText = document.querySelector('#size-text'); 

// Initialize the page
function initPage() {

  sizeText.textContent = `${slider.value}px`;
  sizeText.style.display = 'inline-block';
  sizeText.style.transform = `translateX(${calculateLabelPos()}px)`;
}

initPage();

// Heading text
form.addEventListener('submit', function(e) {
  e.preventDefault();                        
  const newText = document.querySelector('#new-heading').value; 
  heading.textContent = newText;           
});
// Text size
slider.addEventListener('input', handleSlider);

function handleSlider() {
  const fontSize = `${slider.value}px`;  
  heading.style.fontSize = fontSize;     
  sizeText.textContent = fontSize;      
  sizeText.style.display = 'inline-block';
  sizeText.style.transform = `translateX(${calculateLabelPos()}px)`;
}


// Adapted from https://css-tricks.com/value-bubbles-for-range-inputs/
function calculateLabelPos() {
  const val = slider.value;
  const newVal = Number(((val - slider.min) * 100) / (slider.max - slider.min));
  sizeText.textContent = `${val}px`;
  sizeText.style.left = `${val}%`;
  sizeText.style.left = `calc(${newVal}% + (${8 - newVal * 0.15}px))`;
  return newVal;
}

// Door game setup
  //  Get the outer box of the modal window and store the element in a variable.
  //  Get the close button (X) of the modal window and store the element in a variable.
  // Get all of the buttons store the node list in a variable
const modalOuterBox = document.querySelector('#modalOuterBox'); 
const closeBtn = document.querySelector('#close');               
const doors = document.querySelectorAll('button[data-door]');   

// Game

// Show modal
function showResult(buttonClicked, randomNum, msg) {

  const content = `<h1>${msg}</h1>
                   <p>You clicked ${buttonClicked}. The winning number was ${randomNum}.</p>`;

  const innerModal = document.querySelector('#modalContent');
  const oldData = innerModal.querySelector('[data-desc=content]');

  oldData ? oldData.remove() : null;

  const div = document.createElement('div');
  div.setAttribute('data-desc', 'content');
  div.innerHTML = content;

  innerModal.appendChild(div);

  modalOuterBox.style.display = 'block';
}


// Close modal
closeBtn.addEventListener('click', () => {
  modalOuterBox.style.display = 'none';
});

modalOuterBox.addEventListener('click', (e) => {
  if (e.target.matches('#modalOuterBox')) {
    modalOuterBox.style.display = 'none';
  }
});

doors.forEach(function(el) { 
  el.addEventListener('click', buttonGame); 
});

function buttonGame() {
  const door = parseInt(this.dataset.door);
  const prize = Math.floor(Math.random() * 3 + 1);

  if (door === prize) {
    showResult(door, prize, 'You won!');
  } else {
    showResult(door, prize, 'You lost :-(');
  }
}
