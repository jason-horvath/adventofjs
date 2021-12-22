import { useEffect, useState } from 'react'
import OpenWeather from '../api/OpenWeather'
import WeeklyDayForecast from './WeeklyDayForecast'


const WeeklyForecast = () => {
  const [dailyForecast, setDailyForecast] = useState()
  useEffect(() => {
    OpenWeather().then(response => {
      setDailyForecast(response.daily)
    })
  }, [])

  return (
    <>
      {dailyForecast?.map((day, key) => {
        return <WeeklyDayForecast key={key} day={day} />
      })}
    </>
    
  )
}

export default WeeklyForecast