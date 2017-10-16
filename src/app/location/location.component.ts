import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LocationService } from './../location.service';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent implements OnInit {
  current;
  cur_weather;
  temp;
  tempMin;
  tempMax;

  constructor( private _route: ActivatedRoute, private _location: LocationService ) {
    this._route.paramMap.subscribe( params => {
      this.current = params.get('loc');
      console.log(this.current);
      this._location.getWeather(this.current, (data) => {
        this.cur_weather = data;
        let k = data.main.temp;
        this.temp = k * (9 / 5) - 459.67;
        let kMin = data.main.temp_min;
        this.tempMin = kMin * (9 / 5) - 459.67;
        let kMax = data.main.temp_max;
        this.tempMax = kMax * (9 / 5) - 459.67;
        console.log(this.cur_weather);
      });
    });
  }

  getLoc() {

  }
  ngOnInit() {
  }

}
