import './App.css';
import Header from './components/header';
import 'normalize.css';
import Card from './components/card';
import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { urlBuild,formatter } from './utils';

const App = () => {
  const [data, setData] = useState([])
  
  const getData = (url) => {
    axios.get(url)
      .then(res => {
        const resultFormatter = formatter(res.data.daily)
        setData(resultFormatter)
    })
  }
  useEffect(() => {
    const coords = { lon:0 , lat:0 , units:'imperial' }
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        coords.lat = position.coords.latitude
        coords.lon = position.coords.longitude
        const testUrl = urlBuild(coords)
        getData(testUrl);
      })
    }
  }, []);
  return (
    <div className='app'>
      <Header/>
      <ul>{ data.map((item) => {
      return <Card day={item.day} data={item.date} temperature={item.temp} key={item.temp} icon={`http://openweathermap.org/img/wn/${item.icon}.png `}/>
      })
      }</ul>
    </div>
  )
}

export default App;