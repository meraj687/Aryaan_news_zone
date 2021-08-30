import axios from 'axios'
import React, { useEffect, useState } from 'react'
import '../WeatherApi/Weather.css'

function Weather() {
  const [city, setCity] = useState(null)
  const [search, setSearch] = useState('Mumbai')
  const inputEvent = (e) => {
    setSearch(e.target.value)
  }
  useEffect(() => {
    const fetchApi = async () => {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=35a9117dae7e5f9c21ff9e596bebfc11`
      )
      const response = await res.json()
      setCity(response.main)
    }
    fetchApi()
  }, [search])
  return (
    <>
      <div className='header'>
        <h1>Weather Api</h1>
        <div className='container'>
          <div className='box'>
            <input
              type='search'
              name=''
              id=''
              value={search}
              onChange={inputEvent}
            />
          </div>
          {!city ? (
            <p>No Data Found</p>
          ) : (
            <div className='information'>
              <h1 className='location'> City : {search}</h1>
              <h2 className='temp'>Temperature : {city.temp} °C</h2>
              <h3 className='tempmin_max'>
                Min : {city.temp_min} °C | Max: {city.temp_max} °C
              </h3>
              <h3>Pressure : {city.pressure}</h3>
              <h3>Humidity : {city.humidity}</h3>
            </div>
          )}
        </div>
      </div>
    </>
  )
}

export default Weather
