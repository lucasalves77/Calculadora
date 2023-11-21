function appendToDisplay(value) {
  document.getElementById('display').value += value;
}

function clearLastCharacter() {
  var currentDisplay = document.getElementById('display').value;
  document.getElementById('display').value = currentDisplay.slice(0, -1);
}

function clearDisplay() {
  document.getElementById('display').value = '';
}

function calculate() {
  try {
      document.getElementById('display').value = eval(document.getElementById('display').value);
  } catch (error) {
      document.getElementById('display').value = 'Error';
  }
}

document.addEventListener('DOMContentLoaded', function() {
  const themeSlider = document.getElementById('theme-slider');
  const body = document.body;
  const calc = document.getElementById('calculadora');
  


  themeSlider.addEventListener('input', function() {
    setTheme(themeSlider.value);
  });


  function setTheme(themeNumber) {
    body.className = ''; // Remove todas as classes existentes
    calc.className =''; // Remove todas as classes existentes
 

    switch (parseInt(themeNumber)) {
      case 1:
        body.classList.add('purple-mode');
        calc.classList.add('calc-1');
        break;
      case 2:
        body.classList.add('dark-mode');
        calc.classList.add('calc-2');
        break;
      case 3:
        body.classList.add('roxo-mode');
        calc.classList.add('calc-3');
        break;
      default:
        break;
    }
  }
});