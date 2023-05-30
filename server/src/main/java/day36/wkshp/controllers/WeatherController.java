package day36.wkshp.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import day36.wkshp.service.WeatherService;
import jakarta.json.Json;
import jakarta.json.JsonArrayBuilder;

@Controller
@RequestMapping(path="/api")
public class WeatherController {
    
    @Autowired
    WeatherService weatherSvc;

    @GetMapping(path="/weather")
    @ResponseBody
    public ResponseEntity<String> getWeather(@RequestParam String city){

        // JsonArrayBuilder arrBuilder = Json.createArrayBuilder();
        
        JsonArrayBuilder arrBuilder = Json.createArrayBuilder();
        weatherSvc.getWeatherData(city).stream()
                                    .map(d -> Json.createObjectBuilder()
                                    .add("main", d.main())
                                    .add("description", d.description())
                                    .add("icon", d.icon())
                                    .build())
                                    .forEach(arrBuilder::add);
        return ResponseEntity.ok(arrBuilder.build().toString());
    }
}
