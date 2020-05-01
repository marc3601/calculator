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



// DODAWANIE PLUSA
function add() {
  if (finalArr.length !== 0 && finalArr.length > 0 && finalArr.join('') !== "0,") {
    calculatedItems.push(finalArr.join('') + "+");
    finalArr = [];
    calculate.innerText = calculatedItems.join('');
  }
}




//DODAWANIE MINUSA

function substract() {
  if (finalArr.length !== 0 && finalArr.length > 0 && finalArr.join('') !== "0,") {
    calculatedItems.push(finalArr.join('') + "-");
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
      if (item.includes(",")) {
        let value = parseFloat(item.replace(",", "."));
        resArr.push(value)
      } else {
        resArr.push(parseFloat(item))
      }
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
      if (item.includes(",")) {
        let value = parseFloat(item.replace(",", "."));
        resArr.push(value)
      } else {
        resArr.push(parseFloat(item))
      }
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
    final.innerText = subtraction(resArr);
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






document.querySelector(".result").addEventListener('click', result);
document.querySelector(".plus").addEventListener('click', add);
document.querySelector(".minus").addEventListener('click', substract);
document.querySelector(".clearAll").addEventListener('click', deleteAll);
