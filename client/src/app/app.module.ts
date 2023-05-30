import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { WeatherComponent } from './components/weather.component';
import { DisplayComponent } from './components/display.component';
import { WeatherSvc } from './app.service';


const appRoutes : Routes =[
  { path: '', component: WeatherComponent },
  { path: 'api/weather/:city', component: DisplayComponent },
  { path: '**', redirectTo: '/', pathMatch: 'full' },
]

@NgModule({
  declarations: [
    AppComponent,
    WeatherComponent,
    DisplayComponent
  ],
  imports: [
    BrowserModule, RouterModule.forRoot(appRoutes, {useHash:true}), ReactiveFormsModule, HttpClientModule
  ],
  providers: [ WeatherSvc ],
  bootstrap: [AppComponent]
})
export class AppModule { }
