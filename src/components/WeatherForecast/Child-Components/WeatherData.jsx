const WeatherData = (props) => {

    return (
        <>
        {props.day !== undefined ? <h2>{props.day}</h2> : null}
        {props.conditions !== undefined ? <p> <span>  conditions:</span> {props.conditions}</p> : null}
        {props.time !== undefined ? <p><span>time: </span> {props.time}</p> : null}


        </>
    );

}


export default WeatherData;