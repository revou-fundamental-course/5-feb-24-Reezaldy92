// Function for convert celsius to fahrenheit
function ConvertCelsius() {
  let celsiusInput = document.getElementById("InputCelsius").value;
  let resultElement = document.getElementById("OutputFahrenheit");

  if (!isNaN(celsiusInput)) {
    let celsius = parseFloat(celsiusInput);
    let fahrenheit = (celsius * 9) / 5 + 32;
    resultElement.value = fahrenheit.toFixed(2);
  } else {
    alert("Please enter a valid number for Celsius temperature.");
  }
}

// Function to reset input and output
function ResetFields() {
  document.getElementById("InputCelsius").value = "";
  document.getElementById("OutputFahrenheit").value = "";
}

// Function to reverse the conversion
function ReverseConversion() {
  let inputCelsius = document.getElementById("InputCelsius").value;
  document.getElementById("InputCelsius").value =
    document.getElementById("OutputFahrenheit").value;
  document.getElementById("OutputFahrenheit").value = inputCelsius;
}
