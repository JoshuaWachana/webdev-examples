// Exercise #1:
// when the user clicks the 'copy' button, copy the user input to the output area

// fetch JavaScript objects representing specific elements in the DOM

// add an event listener on the target element

// callback function to handle event

const userInput1 = document.querySelector('#userInput1');
const copyButton = document.querySelector('#copy');
const output = document.querySelector('#output');

copyButton.addEventListener('click', () => {
  output.textContent = userInput1.value;
});

// Exercise #2:
// when the user enters input text, copy the user input to the output area

// fetch JavaScript objects representing specific elements in the DOM

// add an event listener on the target element

// callback function to handle event

const userInput2 = document.querySelector('#userInput2');
const section2 = document.querySelector('#inputEventExample');

const output2 = document.createElement('div');
output2.setAttribute('id', 'output2');
output2.classList.add('output');
section2.append(output2);

userInput2.addEventListener('input', () => {
  output2.textContent = userInput2.value;
});
