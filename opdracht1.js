document.write("<h1>Opdrachten serie 1: Oefening 1<br></h1>");

let x = alert("maandag");
console.log(x);

document.write("<h1>Opdrachten serie 1: Oefening 2<br></h1>");
let name = "Name : Doe";
let firstname = "Firstname : John";
let city = "City : New York";

alert(name + "\n" + firstname + "\n" + city);

document.write("<h1>Opdrachten serie 1: Oefening 3<br></h1>");
let s = prompt("geef voornaam");
alert("Hallo " + s);

document.write("<h1>Opdrachten serie 1: Oefening 4<br></h1>");
function opdr4(){
  let naam = document.getElementById("name").value;
  let voornaam = document.getElementById("firstName").value;
  let stad = document.getElementById("city").value;
  alert(naam + "\n" + voornaam + "\n" + stad);
}

document.write("<h1>Opdrachten serie 1: Oefening 5<br></h1>");
function opdr5(){
  let getal1 = document.getElementById("firstNumber").value;
  let getal2 = document.getElementById("secondNumber").value;
  function verm(a, b) {
    return a * b;
  }
  alert(verm(getal1, getal2));
}

document.write("<h1>Opdrachten serie 1: Oefening 6<br></h1>");
function opdr6(){
  let getal3 = document.getElementById("firstNumber2").value;
  let getal4 = document.getElementById("secondNumber2").value;
  function deling(a, b) {
    return a / b;
  }
  alert(deling(getal3, getal4));
}

document.write("<h1>Opdrachten serie 1: Oefening 7<br></h1>");
function opdr7(){
  let getal5 = document.getElementById("height").value;
  let getal6 = document.getElementById("birthdate").value;

  let res1 = getal5 * 2;
  let res2 = res1 + 5;
  let res3 = res2 * 50;
  let res4 = res3 - getal6;
  let res5 = res4 + 1766;
  alert(res5);
}

document.write("<h1>Opdrachten serie 1: Oefening 8<br></h1>");
function opdr8(){
  let getal7 = document.getElementById("age").value;
    if (getal7 > 18) {
      alert(" U bent meerderjarig ")
    }
    else {
      alert(" U bent minderjarig ")
    };
}
