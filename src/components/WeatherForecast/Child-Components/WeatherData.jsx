const WeatherData = (props) => {

    return (
        <>
        
        {props.day && <p> {props.day}! </p>}

        {props.conditions && <p><span>conditions:</span> {props.conditions}! </p>}
        {props.time && <p><span>time:</span>  {props.time}! </p>}

        </>
    );

}


export default WeatherData;