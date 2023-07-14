const API_KEY = "375f998a0fd1041fa082eef7edb9b48d";
const API_URL = " https://api.openweathermap.org/data/2.5/weather?&units=metric&q="

const searchCont = document.querySelector(".input") 

const searchBtn = document.querySelector(".search-btn")


async function checkWeather (city){

	const responce = await fetch( API_URL + city+ `&appid=${API_KEY}`);
	var data =await responce.json() ; 
	console.log(data);
	
	document.querySelector(".city").innerHTML=data.name
	document.querySelector(".temp").innerHTML= Math.round(data.main.temp)+ "  C"
	document.querySelector(".min-temp").innerHTML= " Min Temp : " + " "+  Math.round(data.main.temp_min)
	document.querySelector(".max-temp").innerHTML=  "Max Temp : " + " "+ Math.round(data.main.temp_max)
	// document.querySelector(".winddegrees").innerHTML= " Wind Degree :"+data.wind.deg
	document.querySelector(".windspeeds").innerHTML= "Wind Speed :"+ data.wind.speed+" Km/h"
	document.querySelector(".clouds").innerHTML="clouds: "+data.clouds.all+"%"
	document.querySelector(".lon").innerHTML="Longitude : "+data.coord.lon
	document.querySelector(".lat").innerHTML="Latitude: "+data.coord.lat
	document.querySelector(".pressure").innerHTML="Pressure: "+data.main.pressure+"%"
	document.querySelector(".visibility").innerHTML="Visibility : "+data.visibility+"%"
	document.querySelector(".weather").innerHTML=data.weather.main
	document.querySelector(".sunrise").innerHTML=data.sys.sunrise
	document.querySelector(".sunset").innerHTML=data.sys.sunset
	
	document.querySelector(".humidity").innerHTML=   " Humidity : "+data.main.humidity+"%"
	


}

searchBtn.addEventListener("click", ()=>{
	checkWeather(searchCont.value);

})





async function checkPuneWeather(){

	const responce = await fetch( "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=dubai&appid=375f998a0fd1041fa082eef7edb9b48d");
	var res =await responce.json() ; 
	console.log(res);
	
	document.querySelector(".dubai-temp").innerHTML= " "+Math.round(res.main.temp)+`&#8451`

}

checkPuneWeather();





async function checkGoaWeather(){

	const responce = await fetch( "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=goa&appid=375f998a0fd1041fa082eef7edb9b48d");
	var res =await responce.json() ; 
	console.log(res);
	
	document.querySelector(".goa-temp").innerHTML= " "+Math.round(res.main.temp)+`&#8451`

}

checkGoaWeather();






async function checkJapanWeather(){

	const responce = await fetch( "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=japan&appid=375f998a0fd1041fa082eef7edb9b48d");
	var res =await responce.json() ; 
	console.log(res);
	
	document.querySelector(".japan-temp").innerHTML= " "+Math.round(res.main.temp)+`&#8451`

}



checkJapanWeather();

async function checkBangaloreWeather(){

	const responce = await fetch( "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=bangalore&appid=375f998a0fd1041fa082eef7edb9b48d");
	var res =await responce.json() ; 
	console.log(res);
	
	document.querySelector(".bangalore-temp").innerHTML= " "+Math.round(res.main.temp)+`&#8451`

}

checkBangaloreWeather();







