
import './App.css'
// import './components/WeatherForecast/WeatherForecast.css'; // For WeatherForcast.css
import WeatherForecasts from "./components/WeatherForecast/WeatherForecast"; // For WeatherForcast.jsx

const App = () => { 

  

  const weatherForecasts = [
    {
      day: 'Mon',
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-components-lab/assets/day.svg',
      imgAlt: 'sun icon',
      conditions: 'sunny',
      time: 'Morning',
    },
    {
      day: 'Tue',
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-components-lab/assets/night.svg',
      imgAlt: 'moon icon',
      conditions: 'clear',
      time: 'Night',
    },
    {
      day: 'Wed',
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-components-lab/assets/stormy.svg',
      imgAlt: 'clouds with lightning icon',
      conditions: 'stormy',
      time: 'All Day',
    },
    {
      day: 'Thu',
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-components-lab/assets/cloudy-day.svg',
      imgAlt: 'sun overcast by clouds icon',
      conditions: 'overcast',
      time: 'Evening',
    },
    {
      day: 'Fri',
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-components-lab/assets/cloudy-night.svg',
      imgAlt: 'moon overcast by clouds icon',
      conditions: 'cloudy',
      time: 'Night',
    },
  ];
  

  return (
    <>
    <h1>Local Weather</h1>
    <section>
      {weatherForecasts.map((weatherForecast,index) => (
          
        <WeatherForecasts  
             key={index} {...weatherForecast}/>
                      
    ))}
    </section>
  </>

  // return (
  //   <>
  //   <h1>Local Weather</h1>
  //   <section>
      
  //     {weatherForecasts.map((weatherForecasts, index)=> (
  //       <WeatherForecasts

  //       key = {index}

  //         day = {forcast.day}
  //         img = {forcast.img}
  //         imgAlt = {forcast.imgAlt}
  //         conditions = {forcast.conditions}
  //         time={forcast.time}

  //         />
  //     ))}

  //   </section>
  //   </>

  );
}


export default App;
