import React  from 'react'
import './App.css'
import Weather from './Components/Weather'
import 'bootstrap/dist/css/bootstrap.min.css';
import { WeatherComponent } from './Components/DummyWeather/WeatherComponent';
function App() {
  return (
    <div className='app'>
      <Weather/>
    </div>
  )
}

export default App
