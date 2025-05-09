const image = document.getElementById("image");
const weatherData = document.getElementById("weather-data");

let imageurl = "https://static.wikia.nocookie.net/pokemon/images/2/27/0004Charmander.png/revision/latest/scale-to-width-down/1000?cb=20240714093954";


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
