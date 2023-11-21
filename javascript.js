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
  const titulo = document.getElementById('titulo');
  const number = document.getElementById('number');
  const input = document.getElementById('theme-slider');
  const deleteReset = document.querySelectorAll('.delete-reset')


  themeSlider.addEventListener('input', function() {
    setTheme(themeSlider.value);
  });


  function setTheme(themeNumber) {
    body.className = ''; // Remove todas as classes existentess
    if(calc) calc.className = ''; // Remove todas as classes existent
    if(titulo) titulo.className = ''; // Remove todas as classes exist
    if(number) number.className = ''; // Remove todas as classes exist
    if(input) input.className = ''; // Remove todas as
 
    switch (parseInt(themeNumber)) {
      case 1:
        body.classList.add('purple-mode');
        if(calc){
          calc.style.background = '#252D44';
          calc.classList.add('calculadora');
        }
        if (titulo) titulo.style.color = '#fff';
        if (deleteReset) {
          deleteReset.forEach(function(element) {
            element.classList.add('delete-reset');
            element.style.backgroundColor = '#647299';
          });
        } 
        if(input){
          input.classList.add('range-1');
          input.classList.add('range-2');
        }
        break;
      case 2:
        body.classList.add('dark-mode');
        if(calc){
          calc.style.background = '#D3CDCD';
          calc.classList.add('calculadora');
        }        
        if (titulo) titulo.style.color = '#38382F';
        if (deleteReset) {
          deleteReset.forEach(function(element) {
            element.classList.add('delete-reset');
            element.style.backgroundColor = '#367D82';
          });
        } 
        if(input){
          input.classList.add('range-1');
          input.classList.add('range-2');
        }
        break;
      case 3:
        body.classList.add('roxo-mode');
        if(calc){
          calc.style.background = '#1E0836';
          calc.classList.add('calculadora');
        }        
        if (titulo) titulo.style.color = '#FEE73D';
        if (deleteReset) {
          deleteReset.forEach(function(element) {
            element.classList.add('delete-reset');
            element.style.backgroundColor = '#56077C';
          });
        }
        if(input){
          input.classList.add('range-1');
          input.classList.add('range-2');
        }
        break;
      default:
        break;
    }


    
  }
});