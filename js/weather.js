class Weather {
  constructor(city, state){
    this.apiKey = '5b5255d4af3eeed5';
    this.city = city;
    this.state = state;
  }

  // Fetch weather from API
  async getWeather(){
    const response = await fetch(`http://api.wunderground.com/api/${this.apiKey}/conditions/q/${this.state}/${this.city}.json`);

    const responseData = await response.json();

    // Returning current_observation object where all weather info is
    return responseData.current_observation;
  }

  // Change weather location
  changeLocation(city, state){
    this.city = city;
    this.state = state;
  }
}