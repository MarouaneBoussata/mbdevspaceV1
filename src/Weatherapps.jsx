import React, { useState } from 'react'
import axios from 'axios'
import './weather.css'
import videobg from './Images/4933240_Person_People_1920x1080.mp4'
import { useNavigate } from 'react-router-dom'
import { MDBIcon } from 'mdb-react-ui-kit'
function Weatherapps() {
    const Navigate = useNavigate()
    const[data,setData]=useState({})
    const [location,setLocation]=useState('')
    const url =`https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=b49238d243d088a8b20c46469b36be68`
  
    const searchLocation = (evt) =>{
        if(evt.key==='Enter'){
            axios.get(url).then((response)=>{
                setData(response.data)
                console.log(response.data)
            }).catch((error) =>{
                    console.log(error)
                    })
setLocation('')
        }
     
    }
    const showWeatherIcon = (data) =>{
        if(data==="Clouds")
           { return <MDBIcon fas icon="cloud"  size='xl' className='ms-4 text-info'/>}
        if(data==="Clear")
            {return <MDBIcon fas icon="sun" size='xl' className='ms-3 text-warning' />}
            if (data==="Rain"){return <MDBIcon fas icon="cloud-rain"  size='2xl' className='ms-2 text-primary'/>}


    }
  return (
    <div className='weatherapps'>  
        <div className='backbutton'><a href='/'><span className='fw-light text-decoration-underline hover-shadow text-white'>back to the home page</span></a></div>
         <video autoPlay  muted plays-inline className=' bgvideo'>     
<source src={videobg} type="video/mp4"/>
</video> 
<div className='search'>
<input
 value={location}
 placeholder='Enter city name'
 onChange={(evt)=>setLocation(evt.target.value)} 
 onKeyUp={searchLocation}
 className='inputcity'
 type='text' />
</div>
       <div className='container4' >
       {data.name==undefined  && <p className='pweather d-flex justify-content-center'>
                    City name required
                </p>}
       <div className='top' >
        <div className='location'>
            
            <p className='pweather'>{data.name} {data.sys ? <span>, {data.sys.country}</span> : null} </p>
            </div>
            <div className='temp'>
                {data.main ? <h1 className='h1weather'>{data.main.temp.toFixed()}°C</h1>:null}
                
            </div>
            <div className='description'>
                {data.weather ? showWeatherIcon(data.weather[0].main): null}
                {data.weather ? <p className='pweather'>{data.weather[0].main}</p>:null}      
            </div>
      
       </div>
       {data.name != undefined && 
       
       <div className='buttom' >
       <div className='feels'>
       {data.main ? <p className='pweather'>{data.main.feels_like.toFixed()}°C</p>:null} 
       <p>Feels like</p>
            </div>
            <div className='humidity'>
            {data.main ? <p className='pweather'>{data.main.humidity.toFixed()}%</p>:null} 
                <p>Humidity</p>
            </div>
            <div className='wind'>
            {data.wind ? <p className='pweather'>{data.wind.speed.toFixed()} KMH</p>:null} 
                <p>Wind speed</p>
            </div>
       </div>

       
       }
      
       </div>
        
    </div>
  )
}

export default Weatherapps