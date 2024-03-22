var inputvalue = document.querySelector('#cityinput');
var btn = document.querySelector('#submitBtn');
var city = document.querySelector('#cityoutput');
var description = document.querySelector('#description'); // Corrected variable name
var temp = document.querySelector('#temp');
var wind = document.querySelector('#wind');
var now = new Date();
var dateTimeElement = document.getElementById('datetime');
var apik = "8d29f3a015d65074b22f929cf2a0009e";

function convertion(val) {
  return (val - 273).toFixed(3);
}


btn.addEventListener('click', function() { // Corrected method name
  fetch('https://api.openweathermap.org/data/2.5/weather?q=' + inputvalue.value + '&appid=' + apik)
    .then(res => res.json())
    .then(data => {
      var nameval = data['name'];
      var descrip = data['weather'][0]['description']; // Corrected index accessing
      var tempature = data['main']['temp'];
      var wndspeed = data['wind']['speed'];
      var dateString = now.toLocaleDateString('en-US');
      var timeString = now.toLocaleTimeString('en-US');
      
      dateTimeElement.innerHTML = dateString + ' <i class="fa-regular fa-calendar-days"></i>' ;
      city.innerHTML = 'Weather of <span>' + nameval + '</span>'; // Corrected interpolation
      temp.innerHTML = 'Temperature: <span>' + convertion(tempature) + ' c</span>' +' <i class="fa-solid fa-temperature-three-quarters"></i>'; // Corrected interpolation
      description.innerHTML = 'Sky conditions: <span>' + descrip + '</span>'+ ' <i class="fa-solid fa-cloud"></i>'; // Corrected interpolation
      wind.innerHTML = 'Wind Speed: <span>' + wndspeed + ' km/h</span>' + ' <i class="fa-solid fa-wind"></i>'; // Corrected interpolation
    })
    .catch(err => alert('You entered a wrong city name'));
});
