class Weather {
    constructor(city, countryCode) {

        this.apikey = 'ac3c383f415058ee75aed5ce48a213f5';
        this.city = city;
        this.countryCode = countryCode;


    }

    async getWeather() {

        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.countryCode}&appid=${this.apikey}`);

        const responseData = await response.json();

        return responseData;

    }
    changeLocation(city, code) {
        this.city = city;
        this.countryCode = code;
    }

}