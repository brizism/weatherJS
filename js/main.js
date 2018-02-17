// Init weather object
const weather = new Weather('Boston', 'MA');

// Get weather on DOM load
document.addEventListener('DOMContentLoaded', getWeather);

// weather.changeLocation('Bronx', 'NY')

function getWeather(){
  weather.getWeather()
  .then(res => console.log(res))
  .catch(err => console.log(err))
}
