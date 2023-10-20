// Interaction Container
  function plumBD() {
    interactionContainer.style.backgroundColor = "plum";
  }

  function blueBD() {
    interactionContainer.style.backgroundColor = "lightblue";
  }

  function greenBD() {
    interactionContainer.style.backgroundColor = "lightgreen";
  }

  function whiteBD() {
    interactionContainer.style.backgroundColor = "white";
  }

// Repeating Text Container
const loopContainer = document.getElementById('loopContainer');

// Define the text you want to repeat
const textToRepeat = 'This is some repeating text. ';

// Define the number of times to repeat the text
const repeatCount = 5;

// Use a for loop to add the repeating text to the container
for (let i = 0; i < repeatCount; i++) {
    const textElement = document.createElement('p');
    textElement.textContent = textToRepeat;
    loopContainer.appendChild(textElement);
}


// Square Colour Change Container
function changeSquareColor() {
    // Conditions here
    const randomColor = getRandomColor();
    square.style.backgroundColor = randomColor;
}

// Function to generate a random color
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// Event listener to change the color when the button is clicked
changeColorButton.addEventListener('click', changeSquareColor);
 




// Time Container
const textContainer = document.getElementById('textContainer');
let fontSize = 16; // Initial font size in pixels
const maxFontSize = 48; // Maximum font size in pixels
const duration = 20000; // Duration in milliseconds (20 seconds) for the font size increase
const updateInterval = 1000; // Update the font size every 1000 (1 second) milliseconds

const fontSizeIncrement = (maxFontSize - fontSize) / (duration / updateInterval);

function increaseFontSize() {
    if (fontSize < maxFontSize) {
        fontSize += fontSizeIncrement;
        textContainer.style.fontSize = fontSize + 'px';
    } else {
        clearInterval(fontSizeInterval);
    }
}

const fontSizeInterval = setInterval(increaseFontSize, updateInterval);


// Character Container
const textForm = document.getElementById('textForm');
const textInput = document.getElementById('textInput');
const submitButton = document.getElementById('submitButton');
const charCountDiv = document.getElementById('charCountDiv');
const charCount = document.getElementById('charCount');


textForm.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form submission
    
    const inputText = textInput.value;
    const count = inputText.length;
    charCount.textContent = count;

});


// Console Container
const consolePrint = document.getElementById('consolePrint');
const outputMessage = document.getElementById('outputMessage');

consolePrint.addEventListener('click', printConsoleMessage);

function printConsoleMessage() {
  const consoleMessage = 'This is a message from the console!';
  console.log(consoleMessage); // Log the message to the console
  outputMessage.textContent = consoleMessage; // Display the message in the HTML
}



