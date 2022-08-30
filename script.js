
var inputEncoder = document.querySelector("#inputEncoder");
var buttonEncoder = document.querySelector("#encoder");
var buttonDecoder = document.querySelector("#decoder");
var inputAnswer = document.querySelector("#inputAnswer");
var buttonCopy = document.querySelector("#coppy");
var buttonPaste = document.querySelector("#paste");
var copyValue;
var encoders = [
  ["e", "enter"],
  ["i", "imes"],
  ["a", "ai"],
  ["o", "ober"],
  ["u", "ufat"],
];

function encoder() {
  var valueEncoder = inputEncoder.value;
  valueEncoder = valueEncoder.toLowerCase();
  for (var i = 0; i < encoders.length; i++) {
    if (valueEncoder.includes(encoders[i][0])) {
      valueEncoder = valueEncoder.replaceAll(encoders[i][0], encoders[i][1]);
    }
  }
  inputAnswer.value = valueEncoder;
}

function decoder() {
  var valueEncoder = inputEncoder.value;
  for (var i = 0; i < encoders.length; i++) {
    if (valueEncoder.includes(encoders[i][1])) {
      valueEncoder = valueEncoder.replaceAll(encoders[i][1], encoders[i][0]);
    }
  }
  inputAnswer.value = valueEncoder;
}

function copy() {
  copyValue = inputAnswer.value;
  inputAnswer.value = "";
  inputEncoder.value = "";
  return copyValue;
}

function paste() {
  var valuePaste = copyValue;
  inputEncoder.value = valuePaste;
}

buttonEncoder.onclick = encoder;
buttonDecoder.onclick = decoder;
buttonCopy.onclick = copy;
buttonPaste.onclick = paste;


