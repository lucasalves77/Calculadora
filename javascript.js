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
  let input = document.getElementById('theme-slider');
  let delet = document.getElementById('delete');
  let reset = document.getElementById('reset');
  let display = document.getElementById('display');
  let numero = document.querySelectorAll('.numero');
  let igual = document.querySelectorAll('.igual');
  let input2 = document.querySelectorAll('.input');
  let soma = document.getElementById('soma'); 
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


  // Aplica o tema selecionado
  if (range1.checked) {
    body.classList.add('purpleMode');
    slider1.classList.add('slider');
    slider1.style.backgroundColor = 'orange'; 
    soma.classList.add('igual');
    soma.style.backgroundColor = '#C23B2D';
    soma.style.color = '#FFFFFF';
    backSlider.classList.add('backSwitch');
    backSlider.style.backgroundColor = '#181F32';
    display.classList.add('result');
    display.style.backgroundColor = '#181F32';
    calc.classList.add('calculadora');
    calc.style.background = '#252D44';
    delet.classList.add('deleteReset');
    delet.style.backgroundColor = '#647299';

    //remover classes anteriores
    body.classList.remove('darkMode', 'roxoMode');
    slider2.classList.remove('slider');
    slider3.classList.remove('slider');
    slider3.style.backgroundColor = '';
    slider2.style.backgroundColor = '';
    range2.classList.remove('backSwitch');
    range2.style.backgroundColor = '';
    range3.classList.remove('backSwitch');
    range3.style.backgroundColor = '';

  } else if (range2.checked) {
    body.classList.add('darkMode');
    slider2.classList.add('slider');
    slider2.style.backgroundColor = '#C23B2D';
    backSlider.classList.add('backSwitch');
    backSlider.style.backgroundColor = '#D6CCCC';
    display.classList.add('result');
    display.style.backgroundColor = '#EEEEEE';
    calc.classList.add('calculadora');
    calc.style.background = '#D3CDCD';
    delet.classList.add('deleteReset');
    delet.style.backgroundColor = '#647299';

    //remover classes anteriores
    body.classList.remove('purbleMode', 'roxoMode');
    slider1.classList.remove('slider');
    slider3.classList.remove('slider');
    slider1.style.backgroundColor = '';
    slider3.style.backgroundColor = '';
    range3.classList.remove('backSwitch');
    range3.style.backgroundColor = '';
    range1.classList.remove('backSwitch');
    range1.style.backgroundColor = '';

  } else if (range3.checked) {
    body.classList.add('roxoMode');
    slider3.classList.add('slider');
    slider3.style.backgroundColor = '#94FFF9';
    backSlider.classList.add('backSwitch');
    backSlider.style.backgroundColor = '#1E0836';
    display.classList.add('result');
    display.style.backgroundColor = '#1E0836';
    calc.classList.add('calculadora');
    calc.style.background = '#1E0836';
    delet.classList.add('deleteReset');
    delet.style.backgroundColor = 'red';
    

    //remover classes anteriores
    body.classList.remove('purbleMode', 'roxoMode');
    slider1.classList.remove('slider');
    slider2.classList.remove('slider');
    slider1.style.backgroundColor = '';
    slider2.style.backgroundColor = '';
    range1.classList.remove('backSwitch');
    range1.style.backgroundColor = '';
    range2.classList.remove('backSwitch');
    range2.style.backgroundColor = '';

  } else {
    
  }
  

 }
 
