import { daysOfWeekMap, iconNameToSizeMap } from '../data/mappings'

const WeeklyDayForecast = ({ day }) => {
  const weatherDate = new Date(day.dt * 1000)
  const maxTemp = Math.round(day.temp.max)
  const low = Math.round(day.temp.min)
  const dayAbbrev = daysOfWeekMap[weatherDate.getDay()]
  const weatherCrossRef = {
    '01': 'sunny',
    '02': 'partly-cloudy',
    '03': 'cloudy',
    '04': 'cloudy',
    '09': 'rainy',
    '10': 'rainy',
    '11': 'stormy',
    '13': 'snowy',
    '50': 'rainy'
  }
  const getWeatherKey = (iconCode) => {
    const weatherCode = iconCode.slice(0,2)
    return weatherCrossRef[weatherCode]
  }

  const weatherKey = getWeatherKey(day.weather[0].icon)
  const weatherDim = iconNameToSizeMap[weatherKey]
  return (
    <div className="day">
      <div className="day-of-week">{dayAbbrev}</div>
      <div className="date">{weatherDate.getDate()}</div>

      <div className={'bar ' + weatherKey}>
        <div className="weather">
        <svg role="img" width={weatherDim.width} height={weatherDim.height} viewBox={"0 0 " + weatherDim.width + " " + weatherDim.height}>
          <use xlinkHref={'images/'+ weatherKey +'.svg#' + weatherKey}></use>
        </svg>
          
        </div>
        <div className="temperature">
          {maxTemp}<span className="degrees">&deg;</span>
        </div>
        <div className="content">
          <div className="precipitation">
            <svg role="img" className="icon">
              <use xlinkHref="images/icons.svg#precipitation"></use>
            </svg>
            {day.humidity}%
          </div>
          <div className="low">
            <svg role="img" className="icon">
              <use xlinkHref="images/icons.svg#low"></use>
            </svg>
            {low}&deg;
          </div>
        </div>
      </div>
    </div>
  )
}

export default WeeklyDayForecast