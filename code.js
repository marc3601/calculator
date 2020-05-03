const btns = document.querySelectorAll(".calc");
const final = document.querySelector(".final");
const calculate = document.querySelector(".calculateIt");

const controlBtns = [
  ".result",
  ".plus",
  ".minus",
  ".multiply",
  ".divide",
  ".pow",
  ".multiInvers",
  ".squareRoot",
  ".percent",
  ".clearAll",
  ".clear",
  ".backspace",
  ".negative"
];
const controlFn = [
  result,
  add,
  substract,
  multiply,
  divide,
  power,
  multiInvers,
  squareRoot,
  percent,
  deleteAll,
  deleteAll,
  backspace,
  addNegative
];

for (let i = 0; i < controlFn.length; i++) {
  document
    .querySelector(controlBtns[i])
    .addEventListener("click", controlFn[i]);
}

let finalArr = [];
let calculatedItems = [];
let dot = [];

// NASŁUCHIWANIE NUMERÓW.
btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (btn.innerText !== "+/-" && btn.innerText !== ".") {
      if (finalArr.length < 12) {
        finalArr.push(btn.innerText);
      }
    }
    if (btn.innerText === "." && finalArr.length === 0) {
      finalArr.push("0.");
      dot.push(".");
      console.log(dot);
    } else if (btn.innerText === ".") {
      finalArr.push(".");
      dot.push(".");
      console.log(dot);
    }
    final.innerText = finalArr.join("");
  });
});

// DODAWANIE PLUSA
function add() {
  if (
    finalArr.length !== 0 &&
    finalArr.length > 0 &&
    finalArr.join("") !== "0."
  ) {
    calculatedItems.push(finalArr.join("") + "+");
    finalArr = [];
    calculate.innerText = calculatedItems.join("");
  }
}

//DODAWANIE MINUSA

function substract() {
  if (
    finalArr.length !== 0 &&
    finalArr.length > 0 &&
    finalArr.join("") !== "0."
  ) {
    calculatedItems.push(finalArr.join("") + "-");
    finalArr = [];
    calculate.innerText = calculatedItems.join("");
  }
}

// DODAWANIE ZNAKU MNOŻENIA

function multiply() {
  if (
    finalArr.length !== 0 &&
    finalArr.length > 0 &&
    finalArr.join("") !== "0."
  ) {
    calculatedItems.push(finalArr.join("") + "x");
    finalArr = [];
    calculate.innerText = calculatedItems.join("");
  }
}

//DODAWANIE ZNAKU DZIELENIA
function divide() {
  if (
    finalArr.length !== 0 &&
    finalArr.length > 0 &&
    finalArr.join("") !== "0."
  ) {
    calculatedItems.push(finalArr.join("") + "/");
    finalArr = [];
    calculate.innerText = calculatedItems.join("");
  }
}

let resArr = [];
// WYNIK
function result() {
  if (calculate.innerText.slice(-1) === "+") {
    add();
    let equal = calculate.innerText;
    let newArr = equal.split("+");
    newArr.forEach((item) => {
      resArr.push(parseFloat(item));
    });
    resArr.pop();
    // Dodajemy liczby
    function addition(arr) {
      let total = arr[0];
      for (let i = 1, length = arr.length; i < length; i++) {
        total += arr[i];
      }
      return total;
    }
    if (equal.includes(".") !== true) {
      final.innerText = addition(resArr);
      final.innerText = final.innerText.slice(0, 10);
    } else {
      final.innerText = addition(resArr).toFixed(2);
    }
  }

  if (calculate.innerText.slice(-1) === "-") {
    substract();
    let equal = calculate.innerText;
    let newArr = equal.split("-");
    newArr.forEach((item) => {
      resArr.push(parseFloat(item));
    });
    resArr.pop();

    //Odejmujemy liczby
    function subtraction(arr) {
      let total = arr[0];
      for (let i = 1, length = arr.length; i < length; i++) {
        total -= arr[i];
      }
      return total;
    }
    if (equal.includes(".") !== true) {
      final.innerText = subtraction(resArr);
      final.innerText = final.innerText.slice(0, 10);
    } else {
      final.innerText = subtraction(resArr).toFixed(2);
    }
  }

  if (calculate.innerText.slice(-1) === "x") {
    multiply();
    let equal = calculate.innerText;
    let newArr = equal.split("x");
    newArr.forEach((item) => {
      resArr.push(parseFloat(item));
    });
    resArr.pop();

    //Mnożymy liczby
    function multiplyNumbers(arr) {
      let total = arr[0];
      for (let i = 1, length = arr.length; i < length; i++) {
        total *= arr[i];
      }
      return total;
    }
    final.innerText = multiplyNumbers(resArr);
    final.innerText = final.innerText.slice(0, 10);
  }

  if (calculate.innerText.slice(-1) === "/") {
    divide();
    let equal = calculate.innerText;
    let newArr = equal.split("/");
    newArr.forEach((item) => {
      resArr.push(parseFloat(item));
    });
    resArr.pop();
    //Dzielimy liczby
    function multiplyNumbers(arr) {
      let total = arr[0];
      for (let i = 1, length = arr.length; i < length; i++) {
        total /= arr[i];
      }
      return total;
    }
    final.innerText = multiplyNumbers(resArr);
    final.innerText = final.innerText.slice(0, 10);
  }
  calculate.innerText = calculate.innerText.slice(0, -1) + "=";
}

//POTEGOWANIE
function power() {
  calculate.innerText = "sqr(" + finalArr.join("") + ")";

  final.innerHTML = Math.pow(finalArr.join(""), 2);
}

//LICZBA ODWROTNA
function multiInvers() {
  if (
    (finalArr.length !== 0 && final.innerHTML !== "0") ||
    final.innerHTML !== "0."
  ) {
    calculate.innerText = "1/(" + finalArr.join("") + ")";
    final.innerText = 1 / finalArr.join("");
  } else {
    final.innerText = "Nie dziel przez zero";
  }
}

//PIERWIASTEK
function squareRoot() {
  calculate.innerText = "√/(" + finalArr.join("") + ")";
  let result = Math.sqrt(finalArr.join(""));

  if (result % 1 !== 0) {
    final.innerHTML = result.toFixed(2);
  } else {
    final.innerHTML = result.toFixed();
  }
}

//PROCENTY
function percent() {
  const sign = calculatedItems[0].slice(-1);
  const divMult = finalArr.join("") / 100;
  const percentOf = calculatedItems[0].replace(sign, "");
  const plusMinus = percentOf * divMult;
  let equals;

  switch (sign) {
    case "+":
      equals = parseFloat(percentOf) + parseFloat(plusMinus);
      calculate.innerHTML = percentOf + "+" + finalArr.join("") + "%=";
      break;
    case "-":
      equals = parseFloat(percentOf) - parseFloat(plusMinus);
      calculate.innerHTML = percentOf + "-" + finalArr.join("") + "%=";
      break;
    case "x":
      equals = parseFloat(percentOf) * parseFloat(divMult);
      calculate.innerHTML = percentOf + "x" + finalArr.join("") + "%=";
      break;
    case "/":
      equals = parseFloat(percentOf) / parseFloat(divMult);
      calculate.innerHTML = percentOf + "/" + finalArr.join("") + "%=";
      break;
    default:
  }
  if (equals % 1 !== 0) {
    final.innerHTML = equals.toFixed(2);
  } else {
    final.innerHTML = equals.toFixed();
  }
}

//LICZBY UJEMNE
function addNegative() {
  if (
    final.innerHTML !== "0" &&
    final.innerHTML !== "0." &&
    final.innerHTML !== ""
  ) {
    if (final.innerHTML.charAt(0) === "-") {
      finalArr[0] = finalArr[0].replace("-", "");
    } else {
      finalArr[0] = "-" + finalArr[0];
    }
  }
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
    final.innerText = finalArr.join("");
  } else {
    final.innerText = "0";
  }
}

// KOD ALERTÓW

const alert1 = setTimeout(function () {
  document.querySelector(".alert1").classList.add("pop");
}, 250);

document
  .querySelector(".alert1 .close > span")
  .addEventListener("click", () => {
    document.querySelector(".alert1").classList.remove("pop");
  });

const alert2 = setTimeout(function () {
  document.querySelector(".alert2").classList.add("pop");
}, 500);

document
  .querySelector(".alert2 .close > span")
  .addEventListener("click", () => {
    document.querySelector(".alert2").classList.remove("pop");
  });

document
  .querySelector(".memBtns")
  .addEventListener("click", () =>
    document.querySelector(".alert3").classList.add("pop")
  );
document
  .querySelector(".alert3 .close > span")
  .addEventListener("click", () => {
    document.querySelector(".alert3").classList.remove("pop");
  });
