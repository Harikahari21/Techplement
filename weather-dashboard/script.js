// const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Delhi';
// const options = {
//     method: 'GET',
//     headers: {
//         'X-RapidAPI-Key': '7c40d45887mshe60b48d66925ca7p1c3b6bjsn9c8a568c88b7',
//         'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
//     }
// };

// const getWeather = async (city) =>{
// cityName.innerHTML = city
//     try {
//         const response = await fetch(url, options);
//         const data = await response.json(); // Parse JSON response
//         console.log(data);
    
//         // Update UI elements with data
//         document.getElementById("cloud_pct").innerHTML = data.cloud_pct;
//         document.getElementById("temp").innerHTML = data.temp;
//         document.getElementById("feels_like").innerHTML = data.feels_like;
//         document.getElementById("humidity").innerHTML = data.humidity;
//         document.getElementById("min_temp").innerHTML = data.min_temp;
//         document.getElementById("max_temp").innerHTML = data.max_temp;
//         document.getElementById("wind_speed").innerHTML = data.wind_speed;
//         document.getElementById("wind_degrees").innerHTML = data.wind_degrees;
//         document.getElementById("sunrise").innerHTML = data.sunrise;
//         document.getElementById("sunset").innerHTML = data.sunset;
//     } catch (error) {
//         console.error(error);
//     }
// }

// submit.addEventListener("click", (e) => {
//     e.preventDefault();
//     getWeather(city.value);
// })

// getWeather("Delhi")

const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=';
const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '7c40d45887mshe60b48d66925ca7p1c3b6bjsn9c8a568c88b7',
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
};

const getWeather = async (city) =>{
    try {
        const response = await fetch(url + city, options);
        const data = await response.json(); // Parse JSON response
        console.log(data);
    
        // Update UI elements with data
        // document.getElementById("cloud_pct").innerHTML = data.cloud_pct;
        document.getElementById("temp").innerHTML = data.temp;
        document.getElementById("feels_like").innerHTML = data.feels_like;
        document.getElementById("humidity").innerHTML = data.humidity;
        document.getElementById("min_temp").innerHTML = data.min_temp;
        document.getElementById("max_temp").innerHTML = data.max_temp;
        document.getElementById("wind_speed").innerHTML = data.wind_speed;
        document.getElementById("wind_degrees").innerHTML = data.wind_degrees;

        // Convert sunrise and sunset timestamps to local time
        const sunrise = new Date(data.sunrise * 1000); // Multiply by 1000 to convert to milliseconds
        const sunset = new Date(data.sunset * 1000);

        // Format sunrise and sunset times as HH:MM:SS
        const sunriseTime = sunrise.toLocaleTimeString();
        const sunsetTime = sunset.toLocaleTimeString();

        // Update UI with local sunrise and sunset times
        document.getElementById("sunrise").innerHTML = sunriseTime;
        document.getElementById("sunset").innerHTML = sunsetTime;

        // Set the city name
        document.getElementById("cityName").textContent = city;
    } catch (error) {
        console.error(error);
    }
}

const submit = document.getElementById("submit");
const input = document.getElementById("input");

submit.addEventListener("click", async (e) => {
    e.preventDefault();
    const city = input.value;
    await getWeather(city);
});

// Initial weather for Delhi
getWeather("Delhi");

