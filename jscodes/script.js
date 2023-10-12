// Define an array of words to display
const words = ["awesome", "amazing", "fantastic", "incredible"];
let currentWordIndex = 0;

// Function to type and clear words
function typeAndClearWords() {
  const wordElement = document.getElementById("word");
  const currentWord = words[currentWordIndex];

  // Display word as if it's being typed
  let i = 0;
  const typingInterval = setInterval(() => {
    wordElement.textContent += currentWord[i];
    i++;
    if (i === currentWord.length) {
      clearInterval(typingInterval);

      // Display blinking cursor
      wordElement.classList.add("typing");
     //adjust width of element to fit the Content
     wordElement.style.width="auto";
      // Clear word after a delay
      setTimeout(() => {
        const clearingInterval = setInterval(() => {
          wordElement.textContent = wordElement.textContent.slice(0, -1);
          if (wordElement.textContent === "") {
            clearInterval(clearingInterval);

            // Move to the next word
            currentWordIndex++;
            if (currentWordIndex === words.length) {
              currentWordIndex = 0;
            }
            // Call the function recursively for the next word
            setTimeout(typeAndClearWords, 500); // Delay before typing the next word
          }
        },
          100);
      }, 1000);
    }
  }, 100);
}

// Start the animation on page load
window.addEventListener("load", () => {
  const wordElement = document.getElementById("word");
  wordElement.textContent = " ";
  typeAndClearWords();
});