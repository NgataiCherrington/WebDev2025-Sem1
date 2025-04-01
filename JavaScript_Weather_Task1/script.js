const apiKey = "f1f0e7a28af9fa3bcb7bdf8df4765ef0"
const city = "Dunedin"
let tempCelsius = null;
let highCelsius = null;
let lowCelsius = null;
let tempFahrenheit = null;
let highFahrenheit = null;
let lowFahrenheit = null;
let isCelsius = true;


async function fetchWeather() {
    try {

        const response = await fetch (`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`);
        const data = await response.json();

        document.getElementById("city").textContent = data.name;
        tempCelsius = data.main.temp;
        highCelsius = data.main.temp_max;
        lowCelsius = data.main.temp_min;

        tempFahrenheit = (tempCelsius * 9 / 5) + 32;
        highFahrenheit = (highCelsius * 9 / 5) + 32;
        lowFahrenheit = (lowCelsius * 9 / 5) + 32;

        document.getElementById("temperature").textContent = `${tempCelsius}°C`;
        document.getElementById("high-low").textContent = `High: ${highCelsius}°C  |  Low: ${lowCelsius}°F`
        document.getElementById("description").textContent = data.weather[0].description;
    }
    catch(error) {
        console.error("Error fetching data:", error)
    }
}


function changeTemp() {

    if (tempCelsius == null || highCelsius == null || lowCelsius == null) return;
    if (isCelsius) {
        

        document.getElementById("temperature").textContent = `${tempFahrenheit.toFixed(1)}°F`;
        document.getElementById("high-low").textContent = `High: ${highFahrenheit.toFixed(1)}°F  | Low: ${lowFahrenheit.toFixed(1)}°F`
    } 
    else {
        document.getElementById("temperature").textContent = `${tempCelsius}°C`;
        document.getElementById("high-low").textContent = `High: ${highCelsius}°F  |  Low: ${lowCelsius}°F`
    }
    isCelsius = !isCelsius;
}

fetchWeather();

const btn = document.querySelector("button");
button.addEventListener("click", changeTemp);