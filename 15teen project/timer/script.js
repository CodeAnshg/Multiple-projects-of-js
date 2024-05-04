const countDownDate = new Date("May 01, 2024 12:00:00").getTime();

const x = setInterval(function() {
  const now = new Date().getTime();
  const distance = countDownDate - now;

  const day = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hour = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minute = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const second = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("day").innerHTML = day;
  document.getElementById("hour").innerHTML = hour;
  document.getElementById("min").innerHTML = minute;
  document.getElementById("sec").innerHTML = second;

  if (distance < 0) {
    clearInterval(x);
    document.getElementById("day").innerHTML = "00";
    document.getElementById("hour").innerHTML = "00";
    document.getElementById("min").innerHTML = "00";
    document.getElementById("sec").innerHTML = "00";
  }
}, 1000);
