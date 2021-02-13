class Storage {
    constructor() {
        this.city;
        this.code;
        this.defaultCity = 'Nairobi';
        this.defaultCode = 'KE';

    }
    //Retrieves from localStorage
    getLocation() {
        if (localStorage.getItem('city') === null) {
            this.city = this.defaultCity;
        } else {
            this.city = localStorage.getItem('city');
        }
        if (localStorage.getItem('code') === null) {
            this.code = this.defaultCode;
        } else {
            this.code = localStorage.getItem('code');

        }
        return {
            city: this.city,
            code: this.code
        }
    }
    //Sets user input to the localStorage
    setLocation(city, code) {
        localStorage.setItem('city', city);
        localStorage.setItem('code', code);
    }
}