// Character Set

let upSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let LoSet = "abcdefghijklmnopqrstuvwxyz";
let NumSet = "1234567890";
let SymSet = "`~!@#$%^&*()-_=+/;:'?,.";

//selector
let copy = document.querySelector(".cpy");
let PassBox = document.querySelector(".pass-box");
let TotalChar = document.querySelector("#total");
let upInp = document.querySelector(" #upper-case");
let LoInp = document.querySelector(" #lower-case");
let NumInp = document.querySelector(" #Num-case");
let SymInp = document.querySelector(" #sym-case");

const GeneratorPass = (DataSet) => {
  return DataSet[Math.floor(Math.random() * DataSet.length)];
};
// Create Generate Password Function?
const PassGen = (Password = "") => {
  if (upInp.checked) {
    Password += GeneratorPass(upSet);
  }

  if (LoInp.checked) {
    Password += GeneratorPass(LoSet);
  }
  if (NumInp.checked) {
    Password += GeneratorPass(NumSet);
  }

  if (SymInp.checked) {
    Password += GeneratorPass(SymSet);
  }
  if (Password.length < TotalChar.value) {
    return PassGen(Password);
  }
  PassBox.innerText = truncateString(Password, TotalChar.value);
  return Password;
};

document.querySelector(".btn").addEventListener("click", function () {
  PassGen();
});

copy.addEventListener("click", () => {
  navigator.clipboard
    .writeText(PassBox.innerText)
    .then(() => alert("Password Cpoied !"));
});
// truncateString Function to using  password Length for user
function truncateString(str, num) {
  if (str.length > num) {
    return str.slice(0, num) + "...";
  } else {
    return str;
  }
}
