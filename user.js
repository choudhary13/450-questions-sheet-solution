document.querySelector('span.name').innerHTML = sessionStorage.getItem('name');
document.querySelector('span.points').innerHTML =
  sessionStorage.getItem('points');
document.querySelector('span.time_taken').innerHTML =
  sessionStorage.getItem('time');
