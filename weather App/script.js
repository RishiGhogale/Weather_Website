const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '600c61a511msha880013f3abce65p1a6dc6jsn1a5866b869d3',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

const getweather = (city) => {

	cityName.innerHTML = city
fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
	.then(response => response.json())
	.then((response) => {


		console.log(response)
		cloud_pct.innerHTML = response.cloud_pct
		temp.innerHTML = response.temp
		temp2.innerHTML = response.temp
		feels_like.innerHTML = response.feels_like
		humidity.innerHTML = response.humidity
		humidity2.innerHTML = response.humidity
		min_temp.innerHTML = response.min_temp
		max_temp.innerHTML = response.max_temp
		wind_speed.innerHTML = response.wind_speed
		wind_speed2.innerHTML = response.wind_speed
		wind_degrees.innerHTML = response.wind_degrees
		sunrise.innerHTML = response.sunrise
		sunset.innerHTML = response.sunset

	})
	.catch(err => console.error(err));

}

submit.addEventListener("click",(e)=>{
	e.preventDefault()
getweather(city.value)

})

getweather ("Delhi")


const options2 = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '600c61a511msha880013f3abce65p1a6dc6jsn1a5866b869d3',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};




fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Boston', options)
	.then(response => response.json())
	.then((response) => {


		console.log(response)
		cloud_pct_boston.innerHTML = response.cloud_pct
		temp_boston.innerHTML = response.temp
		feels_like_boston.innerHTML = response.feels_like
		humidity_boston.innerHTML = response.humidity
		min_temp_boston.innerHTML = response.min_temp
		max_temp_boston.innerHTML = response.max_temp
		wind_speed_boston.innerHTML = response.wind_speed
		wind_degrees_boston.innerHTML = response.wind_degrees
		sunrise_boston.innerHTML = response.sunrise
		sunset_boston.innerHTML = response.sunset

	})



	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Shanghai', options)
	.then(response => response.json())
	.then((response) => {


		console.log(response)
		cloud_pct_shanghai.innerHTML = response.cloud_pct
		temp_shanghai.innerHTML = response.temp
		feels_like_shanghai.innerHTML = response.feels_like
		humidity_shanghai.innerHTML = response.humidity
		min_temp_shanghai.innerHTML = response.min_temp
		max_temp_shanghai.innerHTML = response.max_temp
		wind_speed_shanghai.innerHTML = response.wind_speed
		wind_degrees_shanghai.innerHTML = response.wind_degrees
		sunrise_shanghai.innerHTML = response.sunrise
		sunset_shanghai.innerHTML = response.sunset

	})


	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Pune', options)
	.then(response => response.json())
	.then((response) => {


		console.log(response)
		cloud_pct_pune.innerHTML = response.cloud_pct
		temp_pune.innerHTML = response.temp
		feels_like_pune.innerHTML = response.feels_like
		humidity_pune.innerHTML = response.humidity
		min_temp_pune.innerHTML = response.min_temp
		max_temp_pune.innerHTML = response.max_temp
		wind_speed_pune.innerHTML = response.wind_speed
		wind_degrees_pune.innerHTML = response.wind_degrees
		sunrise_pune.innerHTML = response.sunrise
		sunset_pune.innerHTML = response.sunset

	})



	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Delhi', options)
	.then(response => response.json())
	.then((response) => {


		console.log(response)
		cloud_pct_delhi.innerHTML = response.cloud_pct
		temp_delhi.innerHTML = response.temp
		feels_like_delhi.innerHTML = response.feels_like
		humidity_delhi.innerHTML = response.humidity
		min_temp_delhi.innerHTML = response.min_temp
		max_temp_delhi.innerHTML = response.max_temp
		wind_speed_delhi.innerHTML = response.wind_speed
		wind_degrees_delhi.innerHTML = response.wind_degrees
		sunrise_delhi.innerHTML = response.sunrise
		sunset_delhi.innerHTML = response.sunset

	})



	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Ukraine', options)
	.then(response => response.json())
	.then((response) => {


		console.log(response)
		cloud_pct_ukraine.innerHTML = response.cloud_pct
		temp_ukraine.innerHTML = response.temp
		feels_like_ukraine.innerHTML = response.feels_like
		humidity_ukraine.innerHTML = response.humidity
		min_temp_ukraine.innerHTML = response.min_temp
		max_temp_ukraine.innerHTML = response.max_temp
		wind_speed_ukraine.innerHTML = response.wind_speed
		wind_degrees_ukraine.innerHTML = response.wind_degrees
		sunrise_ukraine.innerHTML = response.sunrise
		sunset_ukraine.innerHTML = response.sunset

	})

	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Dubai', options)
	.then(response => response.json())
	.then((response) => {


		console.log(response)
		cloud_pct_dubai.innerHTML = response.cloud_pct
		temp_dubai.innerHTML = response.temp
		feels_like_dubai.innerHTML = response.feels_like
		humidity_dubai.innerHTML = response.humidity
		min_temp_dubai.innerHTML = response.min_temp
		max_temp_dubai.innerHTML = response.max_temp
		wind_speed_dubai.innerHTML = response.wind_speed
		wind_degrees_dubai.innerHTML = response.wind_degrees
		sunrise_dubai.innerHTML = response.sunrise
		sunset_dubai.innerHTML = response.sunset

	})