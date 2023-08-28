import React from 'react'
import "./WeatherMap.css"
const WeatherMap = () =>{
    return(
        <div className='map'>
            <iframe width="100%" height="100%" src="https://embed.windy.com/embed2.html?lat=48.320&lon=20.381&detailLat=50.299&detailLon=18.945&width=650&height=450&zoom=5&level=surface&overlay=wind&product=ecmwf&menu=&message=&marker=&calendar=now&pressure=&type=map&location=coordinates&detail=&metricWind=default&metricTemp=default&radarRange=-1" frameborder="0"></iframe>
        </div>
    )
}
export default WeatherMap