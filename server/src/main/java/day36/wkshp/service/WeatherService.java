package day36.wkshp.service;

import java.io.StringReader;
import java.util.List;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.MediaType;
import org.springframework.http.RequestEntity;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.util.UriComponentsBuilder;

import day36.wkshp.model.WeatherModel;
import jakarta.json.Json;
import jakarta.json.JsonObject;
import jakarta.json.JsonReader;

@Service
public class WeatherService {
/* dfec5987fc8a4077243a59221b4f5db7  */

    @Value("${openweather.apikey}")
    private String appId;

    public static final String API_URL = "https://api.openweathermap.org/data/2.5/weather";

    public List<WeatherModel> getWeatherData(String city){

        // RestTemplate to hit the url to get data
        String url = UriComponentsBuilder.fromUriString(API_URL)
                    .queryParam("q", city)
                    .queryParam("appid", appId)
                    .toUriString();

        RestTemplate template = new RestTemplate();
        // can indicate the type to accept here, json as weather api parse back data in json
        RequestEntity req = RequestEntity.get(url).accept(MediaType.APPLICATION_JSON).build();
        // returning ResponseEntity as string
        ResponseEntity<String> resp = template.exchange(req, String.class);

        String payload = resp.getBody();

        JsonReader reader = Json.createReader(new StringReader(payload));
        JsonObject data = reader.readObject();
        
        return data.getJsonArray("weather").stream()
            .map(v -> v.asJsonObject())
            .map(o -> new WeatherModel(o.getString("main"), o.getString("description"), o.getString("icon")))
            .toList();
    }

    /* public List<WeatherInfo> testCodeForOtherData(String city, String units) throws WeatherException {
		
		//https://api.openweathermap.org/data/2.5/weather?q=<city>&units=<units>&appid=<appid>
		String url = UriComponentsBuilder.fromUriString(URL)
			.queryParam("q", city.replaceAll(" ", "+"))
			.queryParam("units", units)
			.queryParam("appid", appId)
			.toUriString();

		RequestEntity<Void> req = RequestEntity.get(url)
			.accept(MediaType.APPLICATION_JSON)
			.build();

		RestTemplate template = new RestTemplate();
		ResponseEntity<String> resp = null;
		try {
			resp = template.exchange(req, String.class);
		} catch (RestClientException ex) {
			// any status code not in 200, 300
			throw new WeatherException(ex.getMessage());
		}

		String payload = resp.getBody();
		JsonReader reader = Json.createReader(new StringReader(payload));
		JsonObject data = reader.readObject();
		return data.getJsonArray("weather").stream()
			.map(v -> v.asJsonObject())
			.map(o -> new WeatherInfo(o.getString("main"), o.getString("description"), o.getString("icon")))
			.toList();
	} */
}
