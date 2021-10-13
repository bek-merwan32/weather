inputname = document.querySelector('header input');
btn = document.querySelector('header i');
cityname = document.querySelector('.cityname');
temp = document.querySelector('.number');
desc = document.querySelector('.temp');
minmax = document.querySelector('.minmax');
dat = document.querySelector('.date');
app = document.querySelector('.app');
format(new Date());

function format(d) {
    days =[ 'Sunday','Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    monthes = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    day = days[d.getDay()];
    date = d.getDate();
    monthe = monthes[d.getMonth()];
    year = d.getFullYear();
    dat.innerText = day +' '+ date +' '+monthe+' '+year;
}
function image(i) {
    if (i == 'clear sky') {
        app.style.backgroundImage= "url('clear sky.png')";
    } else if (i == 'few clouds') {
        app.style.backgroundImage= "url('few clouds.png')";
    } else if (i == 'overcast clouds') {
        app.style.backgroundImage= "url('cloudy.png')";
    } else if (i == 'rain' || i == 'shower rain' || i == 'drizzle') {
        app.style.backgroundImage= "url('rainy.png')";
    } else if (i == 'snow') {
        app.style.backgroundImage= "url('snowy.png')";
    } else if (i == 'mist') {
        app.style.backgroundImage= "url('mist.png')";
    } else if (i == 'thunderstorm') {
        app.style.backgroundImage= "url('thunderstorm.png')";
    } else if (i == 'sunny') {
        app.style.backgroundImage= "url('sunny.png')";
    } else if (i == 'windy') {
        app.style.backgroundImage= "url('windy.png')";
    }else if(i == 'broken clouds'){
        app.style.backgroundImage= "url('broken clouds.png')";
    }
}
inputname.addEventListener("keydown", function (e) {
    if (e.code === "Enter") { 
        func();
    }});


function func() {
        fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputname.value+'&appid=a5e0f7f5000a7b93443a4e809dde7150')
        .then(response => response.json())
        .then(data => {
            cityname.innerText = data['name'] + ' , ' + data['sys']['country'];
            temp.innerText =  Math.floor(data['main']['temp'] -273.15) + '°C' ;
            desc.innerText = data['weather'][0]['description'];
            minmax.innerText = Math.floor(data['main']['temp_min'] -273.15) + '°C / ' + Math.floor(data['main']['temp_max'] -273.15) + '°C';
            format(new Date());
            image(data['weather'][0]['description'])
        })
        .catch(err => alert("Wrong city name!!"))
}
