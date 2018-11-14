import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) { }

  getTemperature(city:string):any {
    // call openwhisk here
    let url = 'https://service.us.apiconnect.ibmcloud.com/gws/apigateway/api/d4c657b4d5894dc3df8826beb5eeaf18858a5e197ea8a9c5ce14dcde2628c31d/weather/city'
    let finalURL = `${url}?p=${city}`
    return this.http.get(finalURL)
  }
}
