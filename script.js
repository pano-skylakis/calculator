let entries = []
let temp = ''
let display = document.getElementById('display')


//TO DO

//   -JS-
// pressing '=' multiple times should evaluate using the last operator && number given
//   eg. 5+5=10 =(5+10) =(5+15)
// input should only contain X numbers, not infinite
// % should work correctly (not actually sure)
// should display 'entries' above 'temp' in smaller font
// should calculate correctly based on priorities (5+5+(5x5))

// JS STRETCH
//  add button sounds
//  create functional widget to add to any website
//  widget pops/stretches calculator up into centre
//  X sends back to widget
//  typing '80085' or '8008135' and pressing '=' shoots confetti

// -CSS-
// change input direction from left>right to right<left
// rounded edges
// no distinct buttons, only button:hover{color:orange}
// second input for -entries- (smaller font)
// find matching font style
// create widget

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
        replaceOperator();
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


function clearTemp() {
    button = event.target.value;
    if (button === 'CE') {
        temp = '';
        display.value = temp;
  } 
}


//replace 'X' and '÷' with correct JS operators && evaluate
function replaceOperator() {
    button = event.target.value;
    for (let i = 0; i < entries.length; i++) {
        if (entries[i] === 'X') {
            entries[i] = '*';
        }
        if (entries[i] === '÷') {
            entries[i] = '/'
        }
    }
    if (temp != '') {
        entries.push(temp);
  }
  evaluate();
}


function evaluate() {
    let total = 0; 
    if (temp = '') {
        return total += evaluate;
    } else {
        entries = entries.join(' ');
        total = eval(entries);
    }
    display.value = total;
    console.log(total);
}


//push temp to entries when operator is pressed
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