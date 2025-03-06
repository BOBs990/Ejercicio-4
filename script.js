const entrada = document.getElementById('entrada');
const buscador = document.getElementById('buscador');
const searchButton = document.getElementById('boton');
const output = document.getElementById('output');

boton.addEventListener('click', function() {
  const text = entrada.innerText;  
  const word = buscador.value.trim();

  if (!word) {
    alert("Por favor, ingresa una palabra para buscar.");
    return;
  }

  const regex = new RegExp(`(${word})`, 'gi');

  const highlightedText = text.replace(regex, '<span class="highlight">$1</span>');

  entrada.innerHTML = highlightedText;

  const matches = text.match(regex);
  const count = matches ? matches.length : 0;
  output.innerHTML = `<p>Número de ocurrencias de "${word}": ${count}</p>`;
  <div id="output"></div>
});















        

    