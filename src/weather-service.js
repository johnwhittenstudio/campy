export default class WeatherService {
  static getWeatherForecast(location) {
    return fetch(`http://api.openweathermap.org/data/2.5/forecast?appid=f07e1afd7c31671932a1d348b94a5696&q=${location}&units=imperial`)
      .then(function(response) {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        else if (response.ok && response.status === 200){
          return response.json();
        }
        else {
          throw Error (response.statusText);
        }
      })
      .catch(function(error) {
        return error;
      });
  }
}