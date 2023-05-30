import { Component, Input, OnChanges, OnInit, SimpleChanges, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { input } from '../models';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit{

fb = inject(FormBuilder)
router=inject(Router)
defaultCities :string []= ['Singapore', 'Kuala Lumpur', 'Tokyo', 'Bangkok', 'Hong Kong', 'Beijing']

form !: FormGroup

@Input()
newCity!: string

ngOnInit(): void {
  this.form = this.createForm();
}


processForm(city:string){
  // input has to be defined in the model
  this.router.navigate(['/api/weather', city])
  console.info(">>>> navigate: ", this.router.navigate(['/api/weather', city]))
}

addCity(){
  const newCity = this.form.value.city
  
  if (!this.defaultCities.includes(newCity)){
    this.defaultCities.push(newCity)
    console.info(">>>> new cities added: ", newCity)
    console.info(">>>> list of cities: ", this.defaultCities)
  }
}

// field for the form to input
private createForm(){
  return this.fb.group({
    city: this.fb.control<string>('', Validators.required)
  })
}

}
