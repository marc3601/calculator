const btns = document.querySelectorAll(".calc");
const final = document.querySelector(".final");
const calculate = document.querySelector(".calculateIt");
const finalArr = [];

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

    if (btn.innerText === "0" && finalArr.length === 0) {
      finalArr.push("0")
    } else if (btn.innerText === "0" && finalArr.length > 0);
    final.innerText = finalArr.join('');
  })
});

// DODAWANIE
function add() {
  if (finalArr.length !== 0 && finalArr[0] !== "0," && finalArr.length > 0) {
    calculate.innerText = finalArr.join("") + "+";
  }
}

document.querySelector(".plus").addEventListener('click', add);
