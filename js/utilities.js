function getInputFieldValueById(id) {
  const inputValue = document.getElementById(id).value;
  const inputNumber = parseFloat(inputValue);
  return inputNumber;
}

function getTextFieldValueById(id) {
  const textValue = document.getElementById(id).innerText;
  const textNumber = parseFloat(textValue);
  return textNumber;
}

function showHistoryById(id) {
  document.getElementById("donate-container").classList.add("hidden");
  document.getElementById("history-container").classList.add("hidden");
  document.getElementById(id).classList.remove("hidden");
}
