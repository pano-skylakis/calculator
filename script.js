let entries = []
let temp = ''
let total = 0
let display = document.getElementById('display')
let displayEntries = document.getElementById('displayEntries')

//TO DO

//   -JS-
// input should only contain X numbers, not infinite

// JS STRETCH
//  add button sounds
//  create functional widget to add to any website
//  widget pops/stretches calculator up into centre
//  X sends back to widget

// -CSS-
// remove CE button (confusing unless entries/temp has own display)
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
            evaluateEntries();
        } else {
            evaluateFromTotal();
        }
    } else if (total != 0) {
        temp += total;
        entries = [];
        total = 0;
        storeTemp();
    } else {
        removeOperator();
  }
}


//when a button is pressed; add to temp and display on calc
//if first number is 0; do nothing
//if total != 0 then reset
function makeNum(button) {
  if (button === '.' && temp.includes('.')) {
        return;
  } else if (temp.charAt(0) == 0 && button == '0' && temp.charAt(1) != '.') {
        return;
  } else if (total != 0) {
      resetCalc();
  } else {
        temp += button;
  }
  if (temp != '') {
    display.value = temp
    displayEntries.value = entries.join(' ');
  }
}


//reset calculator after a number is pressed if total != 0
function resetCalc() {
    let button = event.target.value;
    entries = [];
    total = 0;
    temp += button;
}


//reset calculator with AC button
function clearAll() {
    button = event.target.value;
    if (button === 'AC') {
        entries = [];
        total = 0;
        temp = ''
        display.value = temp;
        displayEntries.value = entries;
  }
}


// FUTURE USE CLEAR TEMP
//
// function clearTemp() {
//     button = event.target.value;
//     if (button === 'CE') {
//         temp = '';
//         display.value = temp;
//   } 
// }


function evaluateFromTotal() {
    let button = event.target.value
    if (total === 0) {
        evaluate();
        } else {
            entries = entries.split(' ').slice(-2);
            entries.unshift(total);
            entries = entries.join(' ');
            total = eval(entries);
            display.value = total;
    }
}

    


//push current temp to entries and join string
//evaluate entries and display total
function evaluateEntries() {
    button = event.target.value;
    if (temp != '') {
        entries.push(temp);
        entries = entries.join(' ');
        total = eval(entries);
    }
    display.value = total;
    displayEntries.value = entries;
    temp = '';
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
    displayEntries.value = entries.join(' ');
}