import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable, OnInit, inject } from "@angular/core";
import { Weather } from "./models";

const URL = '/api/weather'

@Injectable()
export class WeatherSvc{

    http=inject(HttpClient)

    getWeatherData(city:string){
        const params= new HttpParams()
                    .set("city", city)
        console.info("URL>>> ", URL)
        return this.http.get<Weather[]>(`${URL}`, {params})
    }
}