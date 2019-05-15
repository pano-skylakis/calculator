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
        storeTemp(button);
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



// function storeTemp() {
//     debugger;
//   button = event.target.value;
//   switch (true) {
//       case(button === '+'):
//       entries.push(temp);
//       temp = '+ ';
//       display.value = temp;
//   }
// }