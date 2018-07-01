
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Currency, Country, Conversion, Results } from './currency';

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {

  private _url : string = 'http://free.currencyconverterapi.com/api/v5';
  constructor(
    public httpClient : HttpClient
  ) { }

  getCurrency(){
    let url = this._url + '/currencies';
    return this.httpClient.get<Currency>(url);
  }
  getCurrencies(){
    let url = this._url + '/currencies';
    return this.httpClient.get<Results>(url);
  }
  getCountry(){
    let url = this._url + '/countries';
    return this.httpClient.get<Country>(url);
  }
  getCountries(){
    let url = this._url + '/countries';
    return this.httpClient.get<Results>(url);
  }
  getConversion(from,to){
    let conversionA = `${from}_${to}`;
    let conversionB = `${to}_${from}`;
    let url = `${this._url}/convert?q=${conversionA},${conversionB}&compact=ultra`;
    return this.httpClient.get<Conversion>(url);
  }
  // getHistoricalData(from,to){
    // let conversionA = `${from}_${to}`;
    // let conversionB = `${to}_${from}`;
    // let url = `${this._url}/convert?q=${conversionA},${conversionB}&compact=ultra`;
    // return this.httpClient.get(url);
  // }
}
