import React from 'react'
import search from '../../assets/pictures/search.png'
import '../DummyWeather/WeatherComponent.css'
import clear from '../../assets/pictures/WeatherImages/01d@2x.png'
import fewClouds from '../../assets/pictures/WeatherImages/02d@2x.png'
import scatteredClouds from '../../assets/pictures/WeatherImages/03d@2x.png'
import brokenClouds from '../../assets/pictures/WeatherImages/04d@2x.png'
import showerRain  from '../../assets/pictures/WeatherImages/09d@2x.png'
import 	rain from '../../assets/pictures/WeatherImages/10d@2x.png'
import  thunderstorm from '../../assets/pictures/WeatherImages/11d@2x.png'
import 	snow from '../../assets/pictures/WeatherImages/13d@2x.png'
import  mist from '../../assets/pictures/WeatherImages/50d@2x.png'
export const WeatherComponent = () => {
    const Search = async (city)=>{
        try
        {
            const apiID = "4a94387205a34905e83ae10307bc7670"
            const url =`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiID}`
            const response = await fetch(url)
            const data = await response.json()
            console.log(data)
        }catch(e)
        {
            console.log(e)
        }
    }
        useEffect(()=>{
            Search("New York")
        },[])   
    return (
        <div className='container text-center main bg-primary'>
            <div className="container text-center mb-5">
                <h1 className='text-light'>Weather App</h1>
            </div>
            <div className="row">
                <div className="col-md-11 col-sm-10">
                    <input type="text" placeholder='Search...' className='w-100 text-center' />
                </div>
                <div className="col-md-1 col-sm-12">
                    <button className='btn  border-0  '><img src={search} alt="" className='ms-1 mb-1' width={34} height={34} /></button>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12 displayImage mt-5">
                <img src="" alt="" className='w-25 h-75'/>
                </div>
            </div>

            <div className="row">
                <div className="col-md-12 text-light ">
                    <h1 className='mb-5 fw-bold' style={{fontSize:"60px"}}>16&deg;C</h1>
                    <h2 className='fw-bold'>Porbandar</h2>
                </div>
            </div>

            <div className="row">
                <div className="col-md-6 text-light">
                        <img src={humidity} className="weather-icon" alt="" />
                        <h2>
                            <p><strong>91%</strong> Humidity</p>
                        </h2>
                </div>

                <div className="col-md-6 text-light">
                        <img src={wind} className="weather-icon" alt="" />
                        <h2>
                            <p><strong>3.6 kmp/h</strong> Wind Speed</p>
                        </h2>
                </div>
            </div>
        </div>
    )
}
