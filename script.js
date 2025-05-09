const image = document.getElementById("image");
const weatherData = document.getElementById("weather-data");

let imageurl = "https://static.wikia.nocookie.net/pokemon/images/2/27/0004Charmander.png/revision/latest/scale-to-width-down/1000?cb=20240714093954";
let weatherDataUrl = "https://api.open-meteo.com/v1/forecast?latitude=53.3331&longitude=-6.2489&hourly=temperature_2m,wind_speed_10m,rain,direct_radiation";

// let num = 9999999967;
// let isPrime = true;
// for (let n=2; n<num; n++) {
//     if (num%n == 0) {
//         isPrime = false;
//         break;
//     }
// }
// console.log(isPrime);
// image.src = imageurl;

fetch(imageurl)
.then(response => {
    console.log(response);
    return response.blob();
})
.then(blob => {
    console.log(blob);
    // URL - Universal Resource Locator
    // URI - Universal Resource Indentifier
    const imagesrcurl = URL.createObjectURL(blob);
    image.src = imagesrcurl;
})

// // fetch(weatherDataUrl)
// // .then(response => {
// //     // JSON - JavaScript Object Notation, key-value pairs
// //     return response.json();
// // })
// // .then(data => {
// //     console.log(data);
// //     console.log(data.hourly);
// //     weatherData.innerText = `
// //     Time: ${data.hourly.time[0]}
// //     Rain: ${data.hourly.rain[0]}
// //     Temperature: ${data.hourly.temperature_2m[0]}
// //     Wind Speed: ${data.hourly.wind_speed_10m[0]}
// //     Sunshine: ${data.hourly.direct_radiation[0]}
// //     `
// // })

async function getWeatherData(hour) {
    let response = await fetch(weatherDataUrl);
    let data = await response.json();
    weatherData.innerText = `
    Time: ${data.hourly.time[hour]}
    Rain: ${data.hourly.rain[hour]}
    Temperature: ${data.hourly.temperature_2m[hour]}
    Wind Speed: ${data.hourly.wind_speed_10m[hour]}
    Sunshine: ${data.hourly.direct_radiation[hour]}
    `    
}

getWeatherData(16)