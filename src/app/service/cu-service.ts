import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// API for currency converter

@Injectable()
export class CurrencyService {

    API_KEY = 'b58deacb3e37db688198';

    constructor(public http: HttpClient) {}


    getCountries() {
        return this.http.get(`https://free.currencyconverterapi.com/api/v6/currencies?apiKey=${this.API_KEY}`).toPromise();
    }
    getExchangeRate(from: String, to: String){
        return this.http.get(`http://free.currencyconverterapi.com/api/v5/convert?q=${from}_${to}&compact=y&apiKey=${this.API_KEY}`).toPromise();
    }

}