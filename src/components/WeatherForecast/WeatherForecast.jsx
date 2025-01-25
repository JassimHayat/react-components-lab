
import "./WeatherForecast.css";
import WeatherData from "./Child-Components/WeatherData"; 
import WeatherIcon from "./Child-Components/WeatherIcon";


const WeatherForecasts = (props) => {

    return (

        <div className="weather">

        <WeatherData
                 day = {props.day} />

                <WeatherIcon 
                img = {props.img}   imgAlt={props.imgAlt} />

            <WeatherData
                time = {props.time}
                conditions = {props.conditions} />

          
        </div>



    )

}



export default WeatherForecasts;