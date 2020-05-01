const btns = document.querySelectorAll(".calc");
const final = document.querySelector(".final");
const calculate = document.querySelector(".calculateIt");
let finalArr = [];
let calculatedItems = [];
// NASŁUCHIWANIE NUMERÓW.
btns.forEach((btn) => {
  btn.addEventListener('click', () => {

    if (btn.innerText !== "+/-" && btn.innerText !== ",") {
      if (finalArr.length < 15) {
        finalArr.push(btn.innerText)
      }
    }

    if (btn.innerText === "," && finalArr.length === 0) {
      finalArr.push("0,")
    } else if (btn.innerText === ",") {
      finalArr.push(",")
    };

    final.innerText = finalArr.join('');
  })
});

// DODAWANIE
function add() {


  if (finalArr.length !== 0 && finalArr.length > 0 && finalArr.join('') !== "0,") {

    calculatedItems.push(finalArr.join('') + "+");
    finalArr = [];
    calculate.innerText = calculatedItems.join('');


  }
}
var resArr = [];
// WYNIK
function result() {
  console.log(calculate.innerText);
  add();
  var equal = calculate.innerText;
  var newArr = equal.split('+')
  newArr.forEach((item) => {
    if (item.includes(",")) {
      var value = parseFloat(item.replace(",", "."));
      resArr.push(value)
    } else {
      resArr.push(parseFloat(item))
    }
  });
  resArr.pop();
  // Getting sum of numbers
  const sum = resArr.reduce(function(a, b) {
    return a + b;
  }, 0);

  final.innerText = sum;
}

// USUŃ WSZYSTKO
function deleteAll() {
  finalArr = [];
  calculatedItems = [];
  resArr = [];
  calculate.innerText = "";
  final.innerText = "0";
}



document.querySelector(".result").addEventListener('click', result);
document.querySelector(".plus").addEventListener('click', add);
document.querySelector(".clearAll").addEventListener('click', deleteAll);
