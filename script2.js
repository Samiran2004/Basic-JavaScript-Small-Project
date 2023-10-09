let timeContainer = document.getElementById('time');
setInterval(function () {
    let date = new Date();
    timeContainer.innerHTML = date.toLocaleTimeString();
}, 1000);