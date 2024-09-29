require('dotenv').config();
const axios = require('axios');

async function getCurrentWeather(lat, lon) {
    const apiKey = process.env.OPENWEATHER_API_KEY;
    const url = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric&lang=pt_br`;

    try {
        const response = await axios.get(url);
        const { feels_like } = response.data.main;
        const { description } = response.data.weather[0];
        console.log(`Sensação térmica: ${feels_like}°C, Descrição: ${description}`);
    } catch (error) {
        console.error("Erro ao buscar condições climáticas: ", error.message);
    }
}

// Exemplo de uso 
getCurrentWeather(28.4159, -81.2988); // Coordenadas de Orlando
