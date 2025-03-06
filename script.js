const inputText = document.getElementById('inputText');
const searchWord = document.getElementById('searchWord');
const searchButton = document.getElementById('searchButton');
const output = document.getElementById('output');

searchButton.addEventListener('click', function() {
  const text = inputText.innerText;  
  const word = searchWord.value.trim();

  if (!word) {
    alert("Por favor, ingresa una palabra para buscar.");
    return;
  }

  const regex = new RegExp(`(${word})`, 'gi');

  const highlightedText = text.replace(regex, '<span class="highlight">$1</span>');

  inputText.innerHTML = highlightedText;

  const matches = text.match(regex);
  const count = matches ? matches.length : 0;
  output.innerHTML = `<p>Número de ocurrencias de "${word}": ${count}</p>`;
  <div id="output"></div>
});















        

    