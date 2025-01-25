
import "./WeatherForecast.css";
import WeatherData from "./Child-Components/WeatherData"; 
import WeatherIcon from "./Child-Components/WeatherIcon";


const WeatherForecasts = (props) => {

    return (

        <div className="weather">

        <WeatherData
                 day = {props.day} />

            <WeatherData
                time = {props.time}
                conditions = {props.conditions} />

            <WeatherIcon 
                img = {props.img}   imgAlt={props.imgAlt} />
        </div>



    )

}



export default WeatherForecasts;