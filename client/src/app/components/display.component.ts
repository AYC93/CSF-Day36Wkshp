import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WeatherSvc } from '../app.service';
import { Observable, Subject } from 'rxjs';
import { Weather } from '../models';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit{

  activatedRoute = inject(ActivatedRoute)

  weatherSvc=inject(WeatherSvc)

  city=''

  weather$!: Observable<Weather[]>

  ngOnInit(): void {
    this.city = this.activatedRoute.snapshot.params['city']
    const units = this.activatedRoute.snapshot.queryParams

    this.weather$ = this.weatherSvc.getWeatherData(this.city)

}



}
