let entries = []
let temp = ''
let display = document.getElementById('display')
// target button and add event listener  *********
// turn value of button to temp          *********
// function makeNum() {make button number}  **********
// function clearEntry() {temp = ''} 
// function clearAll (sets temp = '' && entries = [])
// function total - assign each button to correct calculation, entries.push(total); must calc floats;
// function storeTemp(button) - 

document.addEventListener('click', buttonValue)

function buttonValue() {
  let button = event.target.value
  if (!isNaN(button) || button === '.') {
        makeNum(button);
  } else if (button === 'CE') {
        clearTemp();
  } else if (button === 'AC') {
        clearAll();
  } else if (button === '=') {
        total();
  } else {
        removeOperator();
  }
}


function makeNum(button) {
  if (button === '.' && temp.includes('.')) {
        return;
  } else if (temp.charAt[0] === '0' && button === '0') {
        return;
  } else {
        temp += button;
        display.value = temp;
  }
}



function clearAll() {
  button = event.target.value;
  if (button === 'AC') {
    entries = [];
    display.value = (temp = '');
  }
}



function clearTemp(button) {
  button = event.target.value;
  if (button === 'CE') {
    temp = '';
    display.value = temp;
  }
}



function total(button) {
}



function storeTemp() {
  button = event.target.value;
  switch (true) {
      case(button === '+'):
        entries.push(temp, '+');
        temp = '';
        display.value = temp;
        break;
      case(button === '-'):
        entries.push(temp, '-')
        temp = '';
        display.value = temp;
        break;
      case(button === 'X'):
        entries.push(temp, 'X')
        temp = '';
        display.value = temp;
        break;
      case(button === '%'):
        entries.push(temp, '%')
        temp = '';
        display.value = temp;
        break;
      case(button === '÷'):
        entries.push(temp, '÷')
        temp = '';
        display.value = temp;
        break;
  }
}



//if entries[-1] === button && temp = '' do nothing
//if entries[-1] != operator && temp = '' then remove entries[-1] && push new operator
function removeOperator() {
    debugger;
    button = event.target.value;
    switch (true) {
        case(entries[entries.length-1] === button && temp === ''):
          return;
        case(entries[entries.length-1] != button && temp === ''):
            entries.splice(-1, 1);
            entries.push(button);
            break;
        default: storeTemp();
    }
}