const OpenWeather = () => {
  const apiKey = process.env.REACT_APP_WEATHER_API_KEY
  const url = process.env.REACT_APP_WEATHER_URL
  const weeklyUri = process.env.REACT_APP_WEATHER_ONECALL
  const coords = {
    latitude: process.env.REACT_APP_WEATHER_LATITUDE,
    longitude: process.env.REACT_APP_WEATHER_LONGITUDE
  }
  
  const requesUrl = () => {
    const { latitude , longitude } = coords
    return `${url}${weeklyUri}?lat=${latitude}&lon=${longitude}&units=imperial&appid=${apiKey}`
  }
  const get = async () => {
    return await (await fetch(requesUrl())).json()
  }

  return get()

}

export default OpenWeather