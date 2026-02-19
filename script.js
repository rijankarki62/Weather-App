document.getElementById('get-weather').addEventListener('click',()=>{
    const location = document.getElementById('city-input').value.trim();
    if (!location){
        alert('PLease enter a city name');
        return;
    }
    const apiKey = "b9a2e329caf54596b0410945250408";
    const url= `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${location}`
    fetch (url).then(response => response.json()).then(data => {
        const WeatherInfo = document.getElementById('Weather-info');
        WeatherInfo.innerHTML = `
        <h2>${data.location.name}</h2>
        <p>Temperature: ${data.current.temp_c}C</p>
        <p>condition: ${data.current.condition.text}</p>
        <p>Humidity: ${data.current.humidity}%</p>
        <p>Wind Speed: ${data.current.wind_kph}km</p>
        `
    }).catch(error =>{
        console.error('Error fetching weather data:',error);
        const WeatherInfo = document.getElementById('Weather-info');
        WeatherInfo.innerHTML = '<p>Error fetching Weather data</p>'
    })
})