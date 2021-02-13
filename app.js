//Init the Storage class
const storage = new Storage();

storageLocation = storage.getLocation();

//Init the Weather class
const weather = new Weather(storageLocation.city, storageLocation.code);

//Init the UI class
const ui = new UI();



//Get the weather displayed on DOM load
document.addEventListener('DOMContentLoaded', getWeather);

//Change location event
document.getElementById('w-change-btn').addEventListener('click', (e) => {
    const city = document.getElementById('city').value;
    const code = document.getElementById('code').value;

    //Set to local storage
    storage.setLocation(city, code);

    //Update location
    weather.changeLocation(city, code);

    //Get and display weather
    getWeather();

    //Close Modal
    $('#locModal').modal('hide');
})

// getWeather();

function getWeather() {
    weather.getWeather()
        .then(results => {
            console.log(results);
            ui.paint(results);

        })
        .catch(err => {
            console.log(err);
        })

}
