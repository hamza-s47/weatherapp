alert("Sometimes it may not work due to API issue \n \nHit OK to continue");
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'd54a5423a7mshce0692da2391422p11027djsn9ffd78161542',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

const getWeather = (city)=>{

    cityName.innerHTML = city


    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
	.then(response => response.json())
	.then((response) => {
        
        console.log(response)
       
        temp.innerHTML =  response.temp
        feels_like.innerHTML =  response.feels_like
        humidity.innerHTML =  response.humidity
        humidity2.innerHTML =  response.humidity
        max_temp.innerHTML =  response.max_temp
        min_temp.innerHTML =  response.min_temp
        sunrise.innerHTML =  response.sunrise
        sunset.innerHTML =  response.sunset
        wind_degrees.innerHTML =  response.wind_degrees
        wind_speed.innerHTML = parseFloat(response.wind_speed * 3.6).toFixed(2)
        wind_speed2.innerHTML =  parseFloat(response.wind_speed * 3.6).toFixed(2)
        cloud_pct.innerHTML =  response.cloud_pct

    })
	.catch(err => console.error(err));
}

submit.addEventListener("click", (e)=>{
    e.preventDefault()
    getWeather(city.value)
});

const search = document.getElementById('city');
search.addEventListener('keyup', (e) =>{
    if(e.keyCode === 13){
        getWeather(city.value)
    }
});

getWeather("Karachi");

// Amsterdam

const optionsB = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'd54a5423a7mshce0692da2391422p11027djsn9ffd78161542',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Amsterdam', optionsB)
	.then(response => response.json())
	.then((response) => {
        
        console.log(response)
       
        
        tempB.innerHTML =  response.temp
        windB.innerHTML =  parseFloat(response.wind_speed * 3.6).toFixed(2)
        humidityB.innerHTML =  response.humidity

    })
	.catch(err => console.error(err));


// Harare

const optionsI = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'd54a5423a7mshce0692da2391422p11027djsn9ffd78161542',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Harare', optionsI)
	.then(response => response.json())
	.then((response) => {
        
        console.log(response)
       
        
        tempI.innerHTML =  response.temp
        windI.innerHTML =  parseFloat(response.wind_speed * 3.6).toFixed(2)
        humidityI.innerHTML =  response.humidity

    })
	.catch(err => console.error(err));


// Lucknow

const optionsTh = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'd54a5423a7mshce0692da2391422p11027djsn9ffd78161542',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Lucknow', optionsTh)
	.then(response => response.json())
	.then((response) => {
        
        console.log(response)
       
        
        tempTh.innerHTML =  response.temp
        windTh.innerHTML =  parseFloat(response.wind_speed * 3.6).toFixed(2)
        humidityTh.innerHTML =  response.humidity

    })
	.catch(err => console.error(err));


// Quito

const optionsT = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'd54a5423a7mshce0692da2391422p11027djsn9ffd78161542',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Quito', optionsT)
	.then(response => response.json())
	.then((response) => {
        
        console.log(response)
       
        
        tempT.innerHTML =  response.temp
        windT.innerHTML =  parseFloat(response.wind_speed * 3.6).toFixed(2)
        humidityT.innerHTML =  response.humidity

    })
	.catch(err => console.error(err));

    // TIME
    const updateSec = ()=> {
        let d = new Date()

    TimeA.innerHTML = d.toLocaleString('en-US', {
        timeZone: 'Europe/Amsterdam',
      }).split(", ")[1]

      TimeH.innerHTML = d.toLocaleString('en-US', {
        timeZone: 'Africa/Harare',
      }).split(", ")[1]

      TimeL.innerHTML = d.toLocaleString('en-US', {
        timeZone: 'Asia/Kolkata',
      }).split(", ")[1]

      TimeQ.innerHTML = d.toLocaleString('en-US', {
        timeZone: 'America/Guayaquil',
      }).split(", ")[1]
    }
    setInterval(updateSec, 1000);
