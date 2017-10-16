import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

const callApi = 'https://api.openweathermap.org/data/2.5/weather?q=';
const apiKey = '&appid=693b63754f3c08be47736720f3488d91';

@Injectable()
export class LocationService {

  constructor( private _http: Http ) { }

  getWeather(param, callback) {
    this._http.get(callApi + param + apiKey).subscribe(
      (res) => {
        callback(res.json());
      },
      (err) => {
        console.log('something was wrong');
      }
    );
  }
}
