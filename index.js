const quoteNumber = document.getElementById('adviceNo'),
  quoteSentance = document.getElementById('adviceSentance'),
  quoteButton = document.getElementById('genQuote');

function generateQuote() {
  fetch('https://api.adviceslip.com/advice')
    .then((response) => response.json())
    .then((data) => {
      quoteNumber.textContent = `#${data.slip.id}`;
      quoteSentance.textContent = `"${data.slip.advice}`;
    });
}

generateQuote();

quoteButton.addEventListener('click', () => generateQuote());
