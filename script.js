async function getWeather() {
  const city = document.getElementById("cityInput").value;
  const apiKey = "c6b4afa0fb63a529ac9e9df372167a9d"; // 🔑 Replace with your API key
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  const resultDiv = document.getElementById("weatherResult");
  resultDiv.innerHTML = "Fetching...";

  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error("City not found");

    const data = await response.json();
    const weather = `
      <h2>${data.name}, ${data.sys.country}</h2>
      <h3>${data.main.temp}°C</h3>
      <p>${data.weather[0].description}</p>
      <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="weather icon">
    `;
    resultDiv.innerHTML = weather;
  } catch (error) {
    resultDiv.innerHTML = `<p style="color:red;">${error.message}</p>`;
  }
}
