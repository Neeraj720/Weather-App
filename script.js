const  inputBox=document.querySelector('.input-box')
const searchBtn=document.querySelector('#searchBtn')
const weather_image=document.querySelector('.weather_image');
const temperature=document.querySelector('.temperature');
const description=document.querySelector('.description')
const humidity=document.getElementById('humidity')
const wind_speed=document.getElementById('wind-speed')


async function checkWeather(city){
    const API_Key="3a0cb03e905d5927258ed92f785e572c";
    const URL= `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_Key}&units=metric`;
    const data=await fetch(`${URL}`).then(response => response.json())
    return shoWeather(data)

}

function shoWeather(data){
    console.log(data)
    // Set The All Data Dynamicaly
    temperature.innerHTML =`${data.main.temp}`;
    description.innerHTML =`${data.weather[0].description}`
    humidity.innerHTML =`${data.main.humidity}`
    wind_speed.innerHTML=`${data.wind.speed}Km/h`
    // We Also Can Use Switch Case For Set Images To The Page
    if(data.weather[0].main=='Clouds'){
        weather_image.src="Images/cloud.png"
    }
    else if(data.weather[0].main=='Mist'){
        weather_image.src="Images/mist.png"
    }
    else if(data.weather[0].main=='Clear'){
        weather_image.src="Images/clear.png"
    }
    else if(data.weather[0].main=='Rain'){
        weather_image.src="/Images/rain.png"
    }
    else if(data.weather[0].main=="Haze"){
        weather_image.src="Images/snow.png"
    }

}
searchBtn.addEventListener('click',function(){
    checkWeather(inputBox.value)
})