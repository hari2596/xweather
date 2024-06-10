import './Dashboard.css';
import { useState } from 'react';
import axios from 'axios';
import Card from './card';



const Dashboard = () =>
{
    const [ city, setCity ] = useState('');
    const [ weatherData, setWeatherData ] = useState(null);
    const [ isLoading, setisLoading] = useState(false);
 
    const getWeatherData = async() =>
    {
        try
        {
            setisLoading(true);
            let url = `https://api.weatherapi.com/v1/current.json?key=7646e2e709a24d079be84925242502&q=${city}&aqi=no`
            const response = await axios(url);
            setWeatherData(response.data);
            setisLoading(false);
        }
        catch(error)
        {
            alert('Failed to fetch weather data');
            setWeatherData(null);
            setisLoading(false);
            console.log(error);
        }
    }

    const handleClick = (e) =>
    {
        e.preventDefault();
        getWeatherData();
    }

    return(
        
        <div className="container">
            <div className="searchbar">
                <input type="text" name="city" placeholder="Enter city name" onChange={(e)=>setCity(e.target.value)}/>
                <button onClick={handleClick}>Search</button>
            </div>

            {isLoading ? <p>Loading data...</p> 

            : weatherData && 
            <div className="weather-cards">
                <Card title="Temperature" data={weatherData.current?.temp_c} unit="°C"/>
                <Card title="Humidity" data={weatherData.current?.humidity} unit="%"/>
                <Card title="Condition" data={weatherData.current?.condition.text} unit=""/>
                <Card title="Wind Speed" data={weatherData.current?.wind_kph} unit="kph"/>
            </div>}
        </div>
    )
}

export default Dashboard;