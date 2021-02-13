class UI {
    constructor() {
        this.location = document.getElementById('w-location');
        this.description = document.getElementById('w-desc');
        this.details = document.getElementById('w-string');
        this.icon = document.getElementById('w-icon');
        this.humidity = document.getElementById('w-humidity');
        this.pressure = document.getElementById('w-pressure');
        this.feelsLike = document.getElementById('w-feels-like');
        this.wind = document.getElementById('w-wind');






    }
    //Add weather details to the DOM
    paint(weather) {
        this.location.textContent = weather.name;
        this.description.textContent = weather.weather[0].main;
        this.details.textContent = weather.weather[0].description;

        const iconId = weather.weather[0].icon;
        this.icon.setAttribute('src', ` http://openweathermap.org/img/wn/${iconId}@2x.png`);

        this.humidity.textContent = `Humidity: ${weather.main.humidity} %`;
        this.pressure.textContent = `Atmospheric pressure: ${weather.main.pressure} hPa`;
        this.feelsLike.textContent = `Feels like: ${weather.main.feels_like}`;
        this.wind.textContent = `Wind speed: ${weather.wind.speed} meter/sec`;
    }
}