const weather = document.querySelector(".js-weather");

const API_KRY = "9ef4ff7b7a241fe1c8734d649cb14168";
const COORDS = "coords";

function getWeather(lat, lng)
{
    fetch
    (
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KRY}&units=metric`
    )
    .then(function(response)
    {
        return response.json();
    })
    .then(function(json)
    {
        const temp = json.main.temp;
        const place = json.name;
        weather.innerText = `${place}, ${temp}℃`;
    });
}

function saveCoords(coordsObj) //위치 저장
{
    localStorage.setItem(COORDS, JSON.stringify(coordsObj));
}

function handleGeoSuccess(position) //위치 가져오는 것이 성공했을 때
{
    const latitude = position.coords.latitude; //위도
    const longitude = position.coords.longitude; //경도
    const coordsObj = 
    {
        /*latitude: latitude,
        longitude: longitude*/
        latitude,
        longitude
    };
    saveCoords(coordsObj);
    getWeather(latitude, longitude);
}

function handleGeoError() //위치 가져오는 것을 실패했을 때
{
    console.log("Can't access geo location");
}

function askForCoords()
{
    navigator.geolocation.getCurrentPosition(handleGeoSuccess, handleGeoError);
}

function loadCoords()
{
    const loadedCoords = localStorage.getItem(COORDS);

    if(loadedCoords === null) //위치 정보가 없을 때
    {
        askForCoords(); //위치를 물어봄
    }
    else //위치 정보가 있을 때
    {
        const parsedCoords = JSON.parse(loadedCoords);
        getWeather(parsedCoords.latitude, parsedCoords.longitude);
    }
}

function init()
{
    loadCoords();
}
init();