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



 function trocarTema(temaSelecionado){
  let body = document.body;
  let calc = document.getElementById('calculadora');
  let titulo = document.getElementById('titulo');
  let delet = document.getElementById('delete');
  let reset = document.getElementById('resete');
  let display = document.getElementById('display');
  let numero = document.querySelectorAll('.numero');
  let soma = document.getElementById('soma'); 
  let positionTema = document.querySelectorAll('.positionTema');
  let backSlider = document.getElementById('backSlider');
  let slider1 = document.getElementById('slider1');
  let slider2 = document.getElementById('slider2');
  let slider3 = document.getElementById('slider3');
  let range1 = document.getElementById('range1');
  let range2 = document.getElementById('range2');
  let range3 = document.getElementById('range3');


  if (temaSelecionado === 'range1') {
    range2.checked = false;
    range3.checked = false;
  } else if (temaSelecionado === 'range2') {
    range1.checked = false;
    range3.checked = false;
  } else if (temaSelecionado === 'range3') {
    range1.checked = false;
    range2.checked = false;
  }

  if (!range1.checked && !range2.checked && !range3.checked) {
    document.getElementById(temaSelecionado).checked = true;
  }


  /////////////// PRIMEIRO TEMA///////////////
  if (range1.checked) {
    body.classList.add('purpleMode');
    titulo.classList.add('tituloOne');
    calc.classList.add('calculadoraOne');
    delet.classList.add('deleteOne');
    reset.classList.add('resetOne'); 
    backSlider.classList.add('backSwitchOne');
    display.classList.add('resultOne');
    soma.classList.add('igualOne');
    slider1.classList.add('sliderOne');
    numero.forEach(function(elemento) {
      elemento.classList.add('numero');
      elemento.classList.remove('numeroTwo', 'numeroThree');
    });
    positionTema.forEach(function(value) {
      value.classList.add('temaOne');
      value.classList.remove('temaTwo', 'temaThree');
    });

    //remover classes anteriores
    body.classList.remove('darkMode', 'roxoMode');
    titulo.classList.remove('tituloTwo', 'tituloThree');
    delet.classList.remove('deleteTwo', 'deleteThree');
    reset.classList.remove('resetTwo', 'resetThree');
    calc.classList.remove('calculadoraTwo', 'calculadoraThree');
    backSlider.classList.remove('backSwitchTwo', 'backSwitchThree');
    display.classList.remove('resultTwo', 'resultThree');
    soma.classList.remove('igualTwo', 'igualThree');
    slider2.classList.remove('sliderTwo');
    slider3.classList.remove('sliderThree');
    
  /////////////// SEGUNDA TEMA///////////////
  } else if (range2.checked) {
    body.classList.add('darkMode');
    titulo.classList.add('tituloTwo');
    calc.classList.add('calculadoraTwo');
    delet.classList.add('deleteTwo');
    reset.classList.add('resetTwo'); 
    backSlider.classList.add('backSwitchTwo');
    display.classList.add('resultTwo');
    soma.classList.add('igualTwo');
    slider2.classList.add('sliderTwo');
    numero.forEach(function(elemento) {
      elemento.classList.add('numeroTwo');
      elemento.classList.remove('numero', 'numeroThree');
    });
    positionTema.forEach(function(value) {
      value.classList.add('temaTwo');
      value.classList.remove('temaOne', 'temaThree');
    });
 
    //remover classes anteriores
    body.classList.remove('purbleMode', 'roxoMode');
    titulo.classList.remove('tituloOne', 'tituloThree');
    delet.classList.remove('deleteOne', 'deleteThree');
    reset.classList.remove('resetOne', 'resetThree'); 
    calc.classList.remove('calculadoraOne', 'calculadoraThree'); 
    backSlider.classList.remove('backSwitchOne', 'backSwitchThree');
    display.classList.remove('resultOne', 'resultThree');
    soma.classList.remove('igualOne', 'igualThree');
    slider1.classList.remove('sliderOne');
    slider3.classList.remove('sliderThree');

  /////////////// TERCEIRO TEMA///////////////
  } else if (range3.checked) {
    body.classList.add('roxoMode');
    titulo.classList.add('tituloThree');
    calc.classList.add('calculadoraThree');
    delet.classList.add('deleteThree'); 
    reset.classList.add('resetThree'); 
    backSlider.classList.add('backSwitchThree');
    display.classList.add('resultThree');
    soma.classList.add('igualThree');
    slider3.classList.add('sliderThree');
    numero.forEach(function(elemento) {
      elemento.classList.add('numeroThree');
      elemento.classList.remove('numero', 'numeroTwo');
    });
    positionTema.forEach(function(value) {
      value.classList.add('temaThree');
      value.classList.remove('temaOne', 'temaTwo');
    });

    //remover classes anteriores
    body.classList.remove('purbleMode', 'darkMode');
    titulo.classList.remove('tituloTwo', 'tituloOne');
    delet.classList.remove('deleteOne', 'deleteTwo'); 
    reset.classList.remove('resetOne', 'resetTwo'); 
    calc.classList.remove('calculadoraOne', 'calculadoraTwo');
    backSlider.classList.remove('backSwitchOne', 'backSwitchTwo');
    display.classList.remove('resultOne', 'resultTwo');
    soma.classList.remove('igualOne', 'igualTwo');
    slider1.classList.remove('sliderOne');
    slider2.classList.remove('sliderTwo');

  }
 }
 
