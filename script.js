window.onload = function() {
  const minute = document.getElementById("minute");
  const hour = document.getElementById("hour");
  const second = document.getElementById("second");
  const ampmel = document.getElementById("ampm");

  function updateClock() {
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    let ampm = "AM";

    if (h >= 12) {
      ampm = "PM";
      if (h > 12) h -= 12;
    }
    if (h === 0) h = 12; 

    // Format with leading zeroes
    hour.innerText = String(h).padStart(2, "0");
    minute.innerText = String(m).padStart(2, "0");
    second.innerText = String(s).padStart(2, "0");
    ampmel.innerText = ampm;

    setTimeout(updateClock, 1000);
  }

  updateClock(); 
};