import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { config } from './config';
@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  constructor(private http: HttpClient) { }
  getTemperature() {
    // call openwhisk here
    let url = config.url;
    return this.http.get(config.url);
  }
}