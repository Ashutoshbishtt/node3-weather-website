const request = require("request");

const forecast = (latitude, longitude, callback) => {
  const url = `http://api.weatherstack.com/current?access_key=8e5828eee0a81907859fa3a7d17c16a2&query=${longitude},${latitude}`;

  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback("Unable to connect to weather service!", undefined);
    } else if (body.error) {
      callback("Unable to find location", undefined);
    } else {
      callback(
        undefined,
        body.current.weather_descriptions[0] +
          " It is currently " +
          body.current.temperature +
          " degress out. It feels like " +
          body.current.feelslike +
          "degree out. Humidity is " +
          body.current.humidity +
          "%"
      );
    }
  });
};

module.exports = forecast;
