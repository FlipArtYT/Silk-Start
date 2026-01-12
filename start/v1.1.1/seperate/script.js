const time = document.getElementById("time");

function checkTime (time) {
    if (time < 10) {
        return "0" + time;
    }
    return time;
}

function updateTime () {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    //add a zero when minutes < 10
    m = checkTime(m);
    time.innerText = `${h}:${m}`;
}

const searchInput = document.getElementById('search');

searchInput.addEventListener('keydown', function(event) {
  if (event.key === 'Enter') {
    const query = encodeURIComponent(searchInput.value);
    window.location.href = `https://www.google.com/search?q=${query}`;
    searchInput.style.scale = "3"
  }
});

updateTime()
setInterval(updateTime, 1000)