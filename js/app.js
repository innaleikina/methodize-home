//Particles script
particlesJS.load('particles-js', './js/assets/particles.json', function() {
  console.log('callback - particles.js config loaded');
});

//date and time
var date = new Date();
var dateDisplay = date.toDateString();
var time = date.toLocaleTimeString();

document.getElementById('time').innerHTML = time;
document.getElementById('date').innerHTML = dateDisplay;

