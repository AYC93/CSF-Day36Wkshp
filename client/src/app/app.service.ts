import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable, OnInit, inject } from "@angular/core";
import { Weather } from "./models";

const URL = '/api/weather'

@Injectable()
export class WeatherSvc{

    http=inject(HttpClient)

    getWeatherData(city:string){
        const params= new HttpParams()
                    .set("q", city)
                    .set("appid", 'dfec5987fc8a4077243a59221b4f5db7')

        return this.http.get<Weather[]>(`${URL}`, {params})
    }
}