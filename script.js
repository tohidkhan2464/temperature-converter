function temperatureConverter1() {
    let valNum = document.getElementById("inputFahrenheit").value;
    valNum = parseFloat(valNum);
    document.getElementById("outputCelcius").textContent = ((valNum - 32) / 1.8).toFixed(2);
    document.getElementById("outputCelcius").classList.add("output-span");
}

function temperatureConverter2() {
    let valNum = document.getElementById("inputCelsius").value;
    valNum = parseFloat(valNum);
    document.getElementById("outputKelvin").textContent = ((valNum + 273.15).toFixed(2));
    document.getElementById("outputKelvin").classList.add("output-span");
}

function temperatureConverter3() {
    let valNum = document.getElementById("inputKelvin").value;
    valNum = parseFloat(valNum);
    document.getElementById("outputFahrenheit").textContent = ((((valNum - 273.15) * 1.8) + 32).toFixed(2));
    document.getElementById("outputFahrenheit").classList.add("output-span");
}

function reseting1() {
    document.getElementById("outputCelcius").textContent = " ";
    document.getElementById("outputCelcius").classList.remove("output-span");
}

function reseting2() {
    document.getElementById("outputKelvin").textContent = " ";
    document.getElementById("outputKelvin").classList.remove("output-span");
}

function reseting3() {
    document.getElementById("outputFahrenheit").textContent = " ";
    document.getElementById("outputFahrenheit").classList.remove("output-span");
}
