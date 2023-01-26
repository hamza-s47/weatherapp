// Bangkok

const optionsB = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'd54a5423a7mshce0692da2391422p11027djsn9ffd78161542',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Bangkok', optionsB)
	.then(response => response.json())
	.then((response) => {
        
        console.log(response)
       
        
        tempB.innerHTML =  response.temp
        windB.innerHTML =  parseFloat(response.wind_speed * 3.6).toFixed(2)
        humidityB.innerHTML =  response.humidity

    })
	.catch(err => console.error(err));


// Islamabad

const optionsI = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'd54a5423a7mshce0692da2391422p11027djsn9ffd78161542',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Islamabad', optionsI)
	.then(response => response.json())
	.then((response) => {
        
        console.log(response)
       
        
        tempI.innerHTML =  response.temp
        windI.innerHTML =  parseFloat(response.wind_speed * 3.6).toFixed(2)
        humidityI.innerHTML =  response.humidity

    })
	.catch(err => console.error(err));


// Tehran

const optionsTh = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'd54a5423a7mshce0692da2391422p11027djsn9ffd78161542',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Tehran', optionsTh)
	.then(response => response.json())
	.then((response) => {
        
        console.log(response)
       
        
        tempTh.innerHTML =  response.temp
        windTh.innerHTML =  parseFloat(response.wind_speed * 3.6).toFixed(2)
        humidityTh.innerHTML =  response.humidity

    })
	.catch(err => console.error(err));


// Tokyo

const optionsT = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'd54a5423a7mshce0692da2391422p11027djsn9ffd78161542',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Tokyo', optionsT)
	.then(response => response.json())
	.then((response) => {
        
        console.log(response)
       
        
        tempT.innerHTML =  response.temp
        windT.innerHTML =  parseFloat(response.wind_speed * 3.6).toFixed(2)
        humidityT.innerHTML =  response.humidity

    })
	.catch(err => console.error(err));

// Cairo

const optionsC = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'd54a5423a7mshce0692da2391422p11027djsn9ffd78161542',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Cairo', optionsC)
	.then(response => response.json())
	.then((response) => {
        
        console.log(response)
       
        
        tempC.innerHTML =  response.temp
        windC.innerHTML =  parseFloat(response.wind_speed * 3.6).toFixed(2)
        humidityC.innerHTML =  response.humidity

    })
	.catch(err => console.error(err));


// Durban

const optionsD = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'd54a5423a7mshce0692da2391422p11027djsn9ffd78161542',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Durban', optionsD)
	.then(response => response.json())
	.then((response) => {
        
        console.log(response)
       
        
        tempD.innerHTML =  response.temp
        windD.innerHTML =  parseFloat(response.wind_speed * 3.6).toFixed(2)
        humidityD.innerHTML =  response.humidity

    })
	.catch(err => console.error(err));


// Nairobi

const optionsN = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'd54a5423a7mshce0692da2391422p11027djsn9ffd78161542',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Nairobi', optionsN)
	.then(response => response.json())
	.then((response) => {
        
        console.log(response)
       
        
        tempN.innerHTML =  response.temp
        windN.innerHTML =  parseFloat(response.wind_speed * 3.6).toFixed(2)
        humidityN.innerHTML =  response.humidity

    })
	.catch(err => console.error(err));


// Rabat

const optionsR = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'd54a5423a7mshce0692da2391422p11027djsn9ffd78161542',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Rabat', optionsR)
	.then(response => response.json())
	.then((response) => {
        
        console.log(response)
       
        
        tempR.innerHTML =  response.temp
        windR.innerHTML =  parseFloat(response.wind_speed * 3.6).toFixed(2)
        humidityR.innerHTML =  response.humidity

    })
	.catch(err => console.error(err));

// Auckland

const optionsA = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'd54a5423a7mshce0692da2391422p11027djsn9ffd78161542',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Auckland', optionsA)
	.then(response => response.json())
	.then((response) => {
        
        console.log(response)
       
        
        tempA.innerHTML =  response.temp
        windA.innerHTML =  parseFloat(response.wind_speed * 3.6).toFixed(2)
        humidityA.innerHTML =  response.humidity

    })
	.catch(err => console.error(err));


// Hobart

const optionsH = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'd54a5423a7mshce0692da2391422p11027djsn9ffd78161542',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Hobart', optionsH)
	.then(response => response.json())
	.then((response) => {
        
        console.log(response)
       
        
        tempH.innerHTML =  response.temp
        windH.innerHTML =  parseFloat(response.wind_speed * 3.6).toFixed(2)
        humidityH.innerHTML =  response.humidity

    })
	.catch(err => console.error(err));


// Perth

const optionsPt = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'd54a5423a7mshce0692da2391422p11027djsn9ffd78161542',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Perth', optionsPt)
	.then(response => response.json())
	.then((response) => {
        
        console.log(response)
       
        
        tempPt.innerHTML =  response.temp
        windPt.innerHTML =  parseFloat(response.wind_speed * 3.6).toFixed(2)
        humidityPt.innerHTML =  response.humidity

    })
	.catch(err => console.error(err));


// Suva

const optionsSv = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'd54a5423a7mshce0692da2391422p11027djsn9ffd78161542',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Suva', optionsSv)
	.then(response => response.json())
	.then((response) => {
        
        console.log(response)
       
        
        tempSv.innerHTML =  response.temp
        windSv.innerHTML =  parseFloat(response.wind_speed * 3.6).toFixed(2)
        humiditySv.innerHTML =  response.humidity

    })
	.catch(err => console.error(err));

// Buenos Aires

const optionsBA = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'd54a5423a7mshce0692da2391422p11027djsn9ffd78161542',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Buenos Aires', optionsBA)
	.then(response => response.json())
	.then((response) => {
        
        console.log(response)
       
        
        tempBA.innerHTML =  response.temp
        windBA.innerHTML =  parseFloat(response.wind_speed * 3.6).toFixed(2)
        humidityBA.innerHTML =  response.humidity

    })
	.catch(err => console.error(err));


// California

const optionsCF = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'd54a5423a7mshce0692da2391422p11027djsn9ffd78161542',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=California', optionsCF)
	.then(response => response.json())
	.then((response) => {
        
        console.log(response)
       
        
        tempCF.innerHTML =  response.temp
        windCF.innerHTML =  parseFloat(response.wind_speed * 3.6).toFixed(2)
        humidityCF.innerHTML =  response.humidity

    })
	.catch(err => console.error(err));


// Rio de Janeiro

const optionsRJ = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'd54a5423a7mshce0692da2391422p11027djsn9ffd78161542',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Rio de Janeiro', optionsRJ)
	.then(response => response.json())
	.then((response) => {
        
        console.log(response)
       
        
        tempRJ.innerHTML =  response.temp
        windRJ.innerHTML =  parseFloat(response.wind_speed * 3.6).toFixed(2)
        humidityRJ.innerHTML =  response.humidity

    })
	.catch(err => console.error(err));


// Toronto

const optionsTR = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'd54a5423a7mshce0692da2391422p11027djsn9ffd78161542',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Toronto', optionsTR)
	.then(response => response.json())
	.then((response) => {
        
        console.log(response)
       
        
        tempTR.innerHTML =  response.temp
        windTR.innerHTML =  parseFloat(response.wind_speed * 3.6).toFixed(2)
        humidityTR.innerHTML =  response.humidity

    })
	.catch(err => console.error(err));

// Berlin

const optionsBR = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'd54a5423a7mshce0692da2391422p11027djsn9ffd78161542',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Berlin', optionsBR)
	.then(response => response.json())
	.then((response) => {
        
        console.log(response)
       
        
        tempBR.innerHTML =  response.temp
        windBR.innerHTML =  parseFloat(response.wind_speed * 3.6).toFixed(2)
        humidityBR.innerHTML =  response.humidity

    })
	.catch(err => console.error(err));


// Lisbon

const optionsL = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'd54a5423a7mshce0692da2391422p11027djsn9ffd78161542',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Lisbon', optionsL)
	.then(response => response.json())
	.then((response) => {
        
        console.log(response)
       
        
        tempL.innerHTML =  response.temp
        windL.innerHTML =  parseFloat(response.wind_speed * 3.6).toFixed(2)
        humidityL.innerHTML =  response.humidity

    })
	.catch(err => console.error(err));


// Paris

const optionsP = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'd54a5423a7mshce0692da2391422p11027djsn9ffd78161542',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Paris', optionsP)
	.then(response => response.json())
	.then((response) => {
        
        console.log(response)
       
        
        tempP.innerHTML =  response.temp
        windP.innerHTML =  parseFloat(response.wind_speed * 3.6).toFixed(2)
        humidityP.innerHTML =  response.humidity

    })
	.catch(err => console.error(err));


// Rome

const optionsRM = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'd54a5423a7mshce0692da2391422p11027djsn9ffd78161542',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Rome', optionsRM)
	.then(response => response.json())
	.then((response) => {
        
        console.log(response)
       
        
        tempRM.innerHTML =  response.temp
        windRM.innerHTML =  parseFloat(response.wind_speed * 3.6).toFixed(2)
        humidityRM.innerHTML =  response.humidity

    })
	.catch(err => console.error(err));

	// TIME
		const updateSec = ()=> {
			let d = new Date()
	
		  bangkok.innerHTML = d.toLocaleString('en-US', {
			timeZone: 'Asia/Bangkok',
		  }).split(", ")[1]
	
		  islamabad.innerHTML = d.toLocaleString('en-US', {
			timeZone: 'Asia/Karachi',
		  }).split(", ")[1]
	
		  tehran.innerHTML = d.toLocaleString('en-US', {
			timeZone: 'Asia/Tehran',
		  }).split(", ")[1]
	
		  tokyo.innerHTML = d.toLocaleString('en-US', {
			timeZone: 'Asia/Tokyo',
		  }).split(", ")[1]

		  cairo.innerHTML = d.toLocaleString('en-US', {
			timeZone: 'Africa/Cairo',
		  }).split(", ")[1]
	
		  durban.innerHTML = d.toLocaleString('en-US', {
			timeZone: 'Africa/Johannesburg',
		  }).split(", ")[1]
	
		  nairobi.innerHTML = d.toLocaleString('en-US', {
			timeZone: 'Africa/Nairobi',
		  }).split(", ")[1]
	
		  rabat.innerHTML = d.toLocaleString('en-US', {
			timeZone: 'Africa/Casablanca',
		  }).split(", ")[1]

		  auckland.innerHTML = d.toLocaleString('en-US', {
			timeZone: 'Pacific/Auckland',
		  }).split(", ")[1]
	
		  hobart.innerHTML = d.toLocaleString('en-US', {
			timeZone: 'Australia/Hobart',
		  }).split(", ")[1]
	
		  perth.innerHTML = d.toLocaleString('en-US', {
			timeZone: 'Australia/Perth',
		  }).split(", ")[1]
	
		  suva.innerHTML = d.toLocaleString('en-US', {
			timeZone: 'Pacific/Fiji',
		  }).split(", ")[1]

		  buenos.innerHTML = d.toLocaleString('en-US', {
			timeZone: 'America/Buenos_Aires',
		  }).split(", ")[1]
	
		  california.innerHTML = d.toLocaleString('en-US', {
			timeZone: 'America/Los_Angeles',
		  }).split(", ")[1]
	
		  rio.innerHTML = d.toLocaleString('en-US', {
			timeZone: 'America/Sao_Paulo',
		  }).split(", ")[1]
	
		  toronto.innerHTML = d.toLocaleString('en-US', {
			timeZone: 'America/Toronto',
		  }).split(", ")[1]

		  berlin.innerHTML = d.toLocaleString('en-US', {
			timeZone: 'Europe/Berlin',
		  }).split(", ")[1]
	
		  lisbon.innerHTML = d.toLocaleString('en-US', {
			timeZone: 'Europe/Lisbon',
		  }).split(", ")[1]
	
		  paris.innerHTML = d.toLocaleString('en-US', {
			timeZone: 'Europe/Paris',
		  }).split(", ")[1]
	
		  rome.innerHTML = d.toLocaleString('en-US', {
			timeZone: 'Europe/Rome',
		  }).split(", ")[1]
		};
		setInterval(updateSec, 1000);