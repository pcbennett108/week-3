function tempConvert() {
  var input = document.getElementById("tempIn");
  if (document.getElementById("degf").checked == true) {
    var output = ((input.value - 32) * 5) / 9;
  } else {
    var output = input.value * 1.8 + 32;
  }

  var answer = document.getElementById("h1out");
  answer.innerHTML = output;
}
function clearForm() {
  document.getElementById("tempIn").value = "";
  document.getElementById("h1out").innerHTML = "";
}
