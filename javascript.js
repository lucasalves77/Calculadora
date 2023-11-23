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
  let reset = document.getElementById('resete');
  let display = document.getElementById('display');
  let numero = document.querySelectorAll('.numero');
  let igual = document.getElementsByClassName('.igual');
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
    slider1.classList.add('slider');
    slider1.style.backgroundColor = '#C23B2D'; 
    soma.classList.add('igual');
    soma.style.backgroundColor = '#C23B2D';
    soma.style.color = '#FFFFFF';
    backSlider.classList.add('backSwitch');
    backSlider.style.backgroundColor = '#181F32';
    display.classList.add('result');
    display.style.backgroundColor = '#181F32';
    display.style.color = '#FFFFFF';
    numero.forEach(function(elemento) {
      elemento.classList.add('numero'); // Adiciona a classe nova
      elemento.style.color = '#252D44';
      elemento.style.backgroundColor = '#E5E4E0';
    });
    body.classList.add('purpleMode');
    titulo.classList.add('tituloOne');
    calc.classList.add('calculadoraOne');
    delet.classList.add('deleteOne');
    reset.classList.add('resetOne'); 


    //remover classes anteriores
    slider2.classList.remove('slider');
    slider3.classList.remove('slider');
    slider3.style.backgroundColor = '';
    slider2.style.backgroundColor = '';
    range2.classList.remove('backSwitch');
    range2.style.backgroundColor = '';
    range3.classList.remove('backSwitch');
    range3.style.backgroundColor = '';
    
    body.classList.remove('darkMode', 'roxoMode');
    titulo.classList.remove('tituloTwo', 'tituloThree');
    delet.classList.remove('deleteTwo', 'deleteThree');
    reset.classList.remove('resetTwo', 'resetThree');
    calc.classList.remove('calculadoraTwo', 'calculadoraThree');
    

  } else if (range2.checked) {
    slider2.classList.add('slider');
    slider2.style.backgroundColor = '#FF8A38';
    soma.classList.add('igual');
    soma.style.backgroundColor = '#C23B2D';
    soma.style.color = '#FFFFFF';
    backSlider.classList.add('backSwitch');
    backSlider.style.backgroundColor = '#D6CCCC';
    display.classList.add('result');
    display.style.backgroundColor = '#EEEEEE';
    display.style.color = '#FFFFFF';
    calc.classList.add('calculadora');
    numero.forEach(function(elemento) {
      elemento.classList.add('numero'); // Adiciona a classe nova
      elemento.style.color = '#35352A';
      elemento.style.backgroundColor = '#E5E4E0';
    });
    body.classList.add('darkMode');
    titulo.classList.add('tituloTwo');
    calc.classList.add('calculadoraTwo');
    delet.classList.add('deleteTwo');
    reset.classList.add('resetTwo'); 

 
    //remover classes anteriores
    slider1.classList.remove('slider');
    slider3.classList.remove('slider');
    slider1.style.backgroundColor = '';
    slider3.style.backgroundColor = '';
    range3.classList.remove('backSwitch');
    range3.style.backgroundColor = '';
    range1.classList.remove('backSwitch');
    range1.style.backgroundColor = '';

    body.classList.remove('purbleMode', 'roxoMode');
    titulo.classList.remove('tituloOne', 'tituloThree');
    delet.classList.remove('deleteOne', 'deleteThree');
    reset.classList.remove('resetOne', 'resetThree'); 
    calc.classList.remove('calculadoraOne', 'calculadoraThree'); 

  } else if (range3.checked) {
    slider3.classList.add('slider');
    slider3.style.backgroundColor = '#94FFF9';
    soma.classList.add('igual');
    soma.style.backgroundColor = '#94FFF9';
    soma.style.color = '#331B4D';
    backSlider.classList.add('backSwitch');
    backSlider.style.backgroundColor = '#1E0836';
    display.classList.add('result');
    display.style.backgroundColor = '#1E0836';
    display.style.color = '#FEE43B';
    numero.forEach(function(elemento) {
      elemento.classList.add('numero'); // Adiciona a classe nova
      elemento.style.color = '#FEE43B';
      elemento.style.backgroundColor = '#331B4D';
    });
    body.classList.add('roxoMode');
    titulo.classList.add('tituloThree');
    calc.classList.add('calculadoraThree');
    delet.classList.add('deleteThree'); 
    reset.classList.add('resetThree'); 
    

    //remover classes anteriores
    slider1.classList.remove('slider');
    slider2.classList.remove('slider');
    slider1.style.backgroundColor = '';
    slider2.style.backgroundColor = '';
    range1.classList.remove('backSwitch');
    range1.style.backgroundColor = '';
    range2.classList.remove('backSwitch');
    range2.style.backgroundColor = '';

    body.classList.remove('purbleMode', 'darkMode');
    titulo.classList.remove('tituloTwo', 'tituloOne');
    delet.classList.remove('deleteOne', 'deleteTwo'); 
    reset.classList.remove('resetOne', 'resetTwo'); 
    calc.classList.remove('calculadoraOne', 'calculadoraTwo');

  } else {
    
  }
  

 }
 
