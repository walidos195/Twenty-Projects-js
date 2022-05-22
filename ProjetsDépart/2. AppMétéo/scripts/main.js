const Key='451326faf4137e9a78dda6f6ba68e289';
let resultatsAPI;

if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition(position=>{
        let long = position.coords.longitude;
        let lat = position.coords.latitude;
        appelAPI(long,lat);
        console.log(position);
    },()=>{
        alert('Veuillez activer la geo')
    })

}

function appelAPI(long,lat){
    let link=`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&exclude=minutely&units=metric&lang=fr&appid=${Key}`;
    console.log(link, lat);  
    fetch(link
        ).then((response) => response.json()).then((jsonData) => {
            let tempmain=document.getElementById("tempmain");
            let currentweather=document.getElementById("weather");
            setAttribut("tempmain",jsonData.timezone);
            setAttribut("zone",jsonData.current.temp);
            setAttribut("weather",jsonData.current.weather[0].description);
           
             console.log(jsonData);
        });
}
function setAttribut(id,val){
    let element=document.getElementById(id);
    element.innerHTML=val;

                            }