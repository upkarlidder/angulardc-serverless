import { Component } from '@angular/core';

import { WeatherService } from './weather.service'

import { Weather } from './Weather'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'my-app';
  result:Weather = {};

  constructor(private weatherService: WeatherService) { }

  getWeather(): void {

    this.weatherService.getTemperature('Washington')
      .subscribe(weather => {
        console.log(weather)
        this.result.name = weather.weather.name
        this.result.main = []
        weather.weather.weather.forEach(element => {
          this.result.main.push(element.main)
        });
        this.result.humidity = weather.weather.main.humidity
        this.result.pressure = weather.weather.main.pressure
        this.result.description = weather.weather.weather.description
        this.result.temp_min = weather.weather.main.temp_min
        this.result.temp_max = weather.weather.main.temp_max
      });
  }

  ngOnInit() {
    this.getWeather();
  }
}
