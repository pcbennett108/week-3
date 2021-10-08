function tempConvert() {
  var input = document.getElementById("tempIn");
  if (document.getElementById("degf").checked == true) {
    var tempunit = "C";
    var output = ((input.value - 32) * 5) / 9;
  } else {
    var tempunit = "F";

    var output = input.value * 1.8 + 32;
  }

  var answer = document.getElementById("h1out");
  answer.innerHTML = output.toFixed(2) + " &deg" + tempunit;

  if ((tempunit == "F" && output <= 45) || (tempunit == "C" && output <= 7)) {
    outcolormod.backgroundColor = "rgb(75, 75, 255)";
  } else if (
    (tempunit == "F" && output > 45 && output < 80) ||
    (tempunit == "C" && output > 7 && output < 27)
  ) {
    outcolormod.backgroundColor = "rgb(77, 255, 77)";
  } else if (
    (tempunit == "F" && output >= 80) ||
    (tempunit == "C" && output >= 27)
  ) {
    outcolormod.backgroundColor = "rgb(220, 35, 35)";
  }
}
var outcolormod = document.getElementById("output").style;

function clearForm() {
  document.getElementById("tempIn").value = null;
  document.getElementById("h1out").innerHTML = null;
  document.getElementById("output").style.backgroundColor =
    "rgb(255, 255, 255)";
}
