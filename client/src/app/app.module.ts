import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { WeatherComponent } from './components/weather.component';
import { DisplayComponent } from './components/display.component';

const appRoutes : Routes =[
  { path: '', component: WeatherComponent },
  { path: 'api/weather', component: DisplayComponent },
  { path: '**', redirectTo: '/', pathMatch: 'full' },
]

@NgModule({
  declarations: [
    AppComponent,
    WeatherComponent,
    DisplayComponent
  ],
  imports: [
    BrowserModule, RouterModule.forRoot(appRoutes), ReactiveFormsModule, HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
