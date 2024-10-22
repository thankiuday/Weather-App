import React, { useEffect, useRef, useState } from 'react'
import '../Components/Weather.css'
import '@fortawesome/fontawesome-free/css/all.min.css';
import search from '../assets/pictures/search.png'
import clear from '../assets/pictures/WeatherImages/01d@2x.png'
import clearNight from '../assets/pictures/WeatherImages/01n@2x.png'
import fewClouds from '../assets/pictures/WeatherImages/02d@2x.png'
import fewCloudsNight from '../assets/pictures/WeatherImages/02n@2x.png'
import scatteredClouds from '../assets/pictures/WeatherImages/03d@2x.png'
import brokenClouds from '../assets/pictures/WeatherImages/04d@2x.png'
import showerRain  from '../assets/pictures/WeatherImages/09d@2x.png'
import 	rain from '../assets/pictures/WeatherImages/10d@2x.png'
import 	rainNight from '../assets/pictures/WeatherImages/10n@2x.png'
import  thunderstorm from '../assets/pictures/WeatherImages/11d@2x.png'
import 	snow from '../assets/pictures/WeatherImages/13d@2x.png'
import  mist from '../assets/pictures/WeatherImages/50d@2x.png'
import humidity from '../assets/pictures/humidity.png'
import wind from '../assets/pictures/wind.png'
const Weather = () => {

    const images = {
        "01d": clear,
        "01n": clearNight,
        "02d": fewClouds,
        "02n": fewCloudsNight,
        "03d": scatteredClouds,
        "04d": brokenClouds,
        "09d": showerRain,
        "10d": rain,
        "10n": rainNight,
        "11d": thunderstorm,
        "13d": snow,
        "50d": mist
    }
    const inputRef = useRef()
    const [weatherData,setWeatherData] = useState(false)
    const [icon,setIcon] = useState("")
    const Search = async (city)=>{
        if(city === "")
            {
                alert("Please Enter City Name!")
                return
            }
        try
        {
            const apiID = "4a94387205a34905e83ae10307bc7670"
            const url =`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiID}`

            const response = await fetch(url)
            const data = await response.json()
            if(!response.ok)
                {

                    alert(data.message)
                    
                    return
                }
            console.log(data)
            setWeatherData(data)
            const iconName = images[data.weather[0].icon]
            setIcon(iconName)
            console.log(icon)
            
        }
        catch(e)
        {
            setWeatherData(false)
            console.log("Error in fetching data...")
        }    
    }
    useEffect(()=>{
      Search("porbandar")
    },[])
  return (
    <div className='weather'>
        <div className="search-bar">
            <input ref={inputRef} type="text" placeholder='Search...' />
            <button className='btn btn border-0' onClick={()=>{Search(inputRef.current.value)}}><img src={search} alt="" width={32} height={32} /></button>
        </div>

        {weatherData?
        <>
        <img src={icon} alt="" className='weather-icon' />
        <p className='temprature'>{weatherData.main.temp}&deg;C</p>
        <p className='location'>{weatherData.name}</p>

        <div className="weather-data">
            <div className="col">
                <img src={humidity} alt="" width={70} height={70} />
                <div>
                    <p>{weatherData.main.humidity}%</p>
                    <span>Humidity</span>
                </div>
            </div>

            <div className="col">
                <img src={wind} alt="" width={70} height={70} />
                <div>
                    <p>{weatherData.wind.speed}kmp/h Wind Speed</p>
                </div>
            </div>
        </div>  
        </>
        :<></>}
        
    </div>
  )
}

export default Weather