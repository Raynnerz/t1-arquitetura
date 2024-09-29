require('dotenv').config();
const axios = require('axios');

// Função para buscar as coordenadas de uma cidade
async function getCoordinates(cityName) {
    const apiKey = process.env.OPENWEATHER_API_KEY;
    const url = `http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=1&appid=${apiKey}`;

    try {
        const response = await axios.get(url);
        const data = response.data[0];
        const { lat, lon } = data;
        console.log(`Latitude: ${lat}, Longitude: ${lon}`);
        return { lat, lon };
    } catch (error) {
        console.error("Erro ao buscar coordenadas: ", error.message);
    }
}

// Exemplo de uso
getCoordinates('Orlando');
