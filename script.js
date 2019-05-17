let entries = []
let temp = ''
let total = 0
let display = document.getElementById('display')

//TO DO

//   -JS-
// pressing a number(not an operator) after entries is totalled should
//    --reset calculator.
// input should only contain X numbers, not infinite
// % should work correctly (not actually sure)
// should display 'entries' above 'temp' in smaller font

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
        if (total === 0) {
        evaluate();
        } else {
            entries = entries.split(' ');
            entries = entries.slice(-2);
            entries.unshift(total);
            entries = entries.join(' ');
            total = eval(entries);
            display.value = total;
        }
  } else {
        removeOperator();
  }
}

//when a button is pressed; add to temp and display on calc
//if first number is 0; do nothing
function makeNum(button) {
  if (button === '.' && temp.includes('.')) {
        return;
  } else if (temp.charAt(0) == 0 && button == '0' && temp.charAt(1) != '.') {
        return;
  } else {
        temp += button;
  }
  if (temp != '') {
    display.value = temp;
  }
}

//reset calculator
function clearAll() {
    button = event.target.value;
    if (button === 'AC') {
        entries = [];
        total = 0;
        temp = ''
        display.value = temp;
  }
}

//FUTURE USE CLEAR TEMP
// function clearTemp() {
//     button = event.target.value;
//     if (button === 'CE') {
//         temp = '';
//         display.value = temp;
//   } 
// }

//push current temp to entries and join string
//evaluate entries and display total
function evaluate() {
    button = event.target.value;
    if (temp != '') {
        entries.push(temp);
        entries = entries.join(' ');
        total = eval(entries);
    }
    display.value = total;
    temp = '';
    console.log(total);
    console.log(temp);
    console.log(entries);
}


//if last operator = button input then do nothing
//if last operator != button then remove and replace last operator
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


//push temp to entries when operator is pressed
//also convert to correct JS operator
function storeTemp() {
  button = event.target.value;
  switch (true) {
        case(button === '+'):
            entries.push(temp, '+');
            break;
        case(button === '-'):
            entries.push(temp, '-')
            break;
        case(button === 'X'):
            entries.push(temp, '*')
            break;
        case(button === '%'):
            entries.push(temp, '%')
            break;
        case(button === '÷'):
            entries.push(temp, '/')
            break;
    }
    temp = '';
    display.value = temp;
}