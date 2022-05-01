import { baseParams } from "./constants"
import moment from 'moment';

//urlParams = {lat:num, lon:num, ...}

export const urlBuild = (urlParams) => {
    const baseUrl = new URL(`https://api.openweathermap.org/data/2.5/onecall`)
    const params = new URLSearchParams(`${baseUrl.search}`)
    //[lat,lon]
    const config = {...baseParams, ...urlParams}
    Object.keys(config).forEach((paramKey) => {
      params.append(paramKey, config[paramKey])
    })
    return `${baseUrl}?${params.toString()}`
  }

export const formatter = (dayList) => {
return dayList.map(
    (dayObject) => {
    return {date: moment(dayObject.dt * 1000).format('MMMM Do, h a'),
            day: moment(dayObject.dt * 1000).format('dddd'), 
            temp: dayObject.temp.day,
            description: dayObject.weather[0].description,
            icon: dayObject.weather[0].icon
            }
    }
)
}