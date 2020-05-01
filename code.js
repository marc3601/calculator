const btns = document.querySelectorAll(".calc");
const final = document.querySelector(".final");
const calculate = document.querySelector(".calculateIt");
let finalArr = [];
let calculatedItems = [];



// NASŁUCHIWANIE NUMERÓW.
btns.forEach((btn) => {
  btn.addEventListener('click', () => {
    if (btn.innerText !== "+/-" && btn.innerText !== ".") {
      if (finalArr.length < 12) {
        finalArr.push(btn.innerText)
      }
    }
    if (btn.innerText === "." && finalArr.length === 0) {
      finalArr.push("0.")
    } else if (btn.innerText === ".") {
      finalArr.push(".")
    };
    final.innerText = finalArr.join('');
  })
});



// DODAWANIE PLUSA
function add() {
  if (finalArr.length !== 0 && finalArr.length > 0 && finalArr.join('') !== "0.") {
    calculatedItems.push(finalArr.join('') + "+");
    finalArr = [];
    calculate.innerText = calculatedItems.join('');

  }
}


//DODAWANIE MINUSA

function substract() {
  if (finalArr.length !== 0 && finalArr.length > 0 && finalArr.join('') !== "0.") {
    calculatedItems.push(finalArr.join('') + "-");
    finalArr = [];
    calculate.innerText = calculatedItems.join('');

  }
}

// DODAWANIE ZNAKU MNOŻENIA

function multiply() {
  if (finalArr.length !== 0 && finalArr.length > 0 && finalArr.join('') !== "0.") {
    calculatedItems.push(finalArr.join('') + "x");
    finalArr = [];
    calculate.innerText = calculatedItems.join('');
  }
}

//DODAWANIE ZNAKU DZIELENIA
function divide() {
  if (finalArr.length !== 0 && finalArr.length > 0 && finalArr.join('') !== "0.") {
    calculatedItems.push(finalArr.join('') + "/");
    finalArr = [];
    calculate.innerText = calculatedItems.join('');
  }
}





var resArr = [];
// WYNIK
function result() {

  if (calculate.innerText.slice(-1) === "+") {
    add();
    let equal = calculate.innerText;
    let newArr = equal.split('+')
    newArr.forEach((item) => {
      resArr.push(parseFloat(item))
    });
    resArr.pop();
    // Dodajemy liczby
    const sum = resArr.reduce(function(a, b) {
      return a + b;
    }, 0);
    final.innerText = sum;
  }
  if (calculate.innerText.slice(-1) === "-") {
    substract();
    let equal = calculate.innerText;
    let newArr = equal.split('-')
    newArr.forEach((item) => {
      resArr.push(parseFloat(item))
    });
    resArr.pop();

    //Odejmujemy liczby
    function subtraction(arr) {
      let total = arr[0];
      for (var i = 1, length = arr.length; i < length; i++) {
        total -= arr[i];
      }
      return total;
    }
    if (equal.includes(".") !== true) {
      final.innerText = subtraction(resArr);
    } else {
      final.innerText = subtraction(resArr).toFixed(2);
    }
  }


  if (calculate.innerText.slice(-1) === "x") {
    multiply();
    let equal = calculate.innerText;
    let newArr = equal.split('x')
    newArr.forEach((item) => {
      resArr.push(parseFloat(item))
    });
    resArr.pop();

    //Mnożymy liczby
    function multiplyNumbers(arr) {
      let total = arr[0];
      for (var i = 1, length = arr.length; i < length; i++) {
        total *= arr[i];
      }
      return total;

    }
    final.innerText = multiplyNumbers(resArr);
  }

  if (calculate.innerText.slice(-1) === "/") {
    divide();
    let equal = calculate.innerText;
    let newArr = equal.split('/')
    newArr.forEach((item) => {
      resArr.push(parseFloat(item))
    });
    resArr.pop();
    //Dzieli,y liczby
    function multiplyNumbers(arr) {
      let total = arr[0];
      for (var i = 1, length = arr.length; i < length; i++) {
        total /= arr[i];
      }
      return total;

    }
    final.innerText = multiplyNumbers(resArr);
  }
}

//POTEGOWANIE
function power() {
  calculate.innerText = "sqr(" + finalArr.join('') + ")";
  final.innerText = Math.pow(finalArr.join(''),2);
}

//LICZBA ODWROTNA
function multiInvers () {
calculate.innerText = "1/(" + finalArr.join('') + ")";
final.innerText = 1/finalArr.join('');
}
//PIERWIASTEK
function squareRoot () {
calculate.innerText = "√/(" + finalArr.join('') + ")";
final.innerText = Math.sqrt(finalArr.join(''));
}


// USUŃ WSZYSTKO
function deleteAll() {
  finalArr = [];
  calculatedItems = [];
  resArr = [];
  calculate.innerText = "";
  final.innerText = "0";
}

// BACKSPACE
function backspace() {
  if (finalArr.length > 0) {
    finalArr.pop();
    final.innerText = finalArr.join('');
  } else {
    final.innerText = "0";
  }
}






document.querySelector(".result").addEventListener('click', result);
document.querySelector(".plus").addEventListener('click', add);
document.querySelector(".minus").addEventListener('click', substract);
document.querySelector(".multiply").addEventListener('click', multiply);
document.querySelector(".divide").addEventListener('click', divide);
document.querySelector(".pow").addEventListener('click', power);
document.querySelector(".multiInvers").addEventListener('click', multiInvers);
document.querySelector(".squareRoot").addEventListener('click', squareRoot);
document.querySelector(".clearAll").addEventListener('click', deleteAll);
document.querySelector(".backspace").addEventListener('click', backspace);
