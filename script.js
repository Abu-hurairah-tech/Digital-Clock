const clock = document.querySelector(".clock");
const millibtn = document.querySelector(".milliseconds");

let showMillisecs = false;
millibtn.addEventListener("click", () => {
  if(showMillisecs === true)
  {
    showMillisecs = false;
    millibtn.innerText = "Show MilliSeconds";
    clock.classList.remove("millisec-style");
}
else{
    showMillisecs = true;
    millibtn.innerText = "Hide MilliSeconds";
    clock.classList.add("millisec-style");
  }
});

function gettime() {
  const now = new Date();
  let hours = String(now.getHours()).padStart(2, "0");
  let ampm = hours >= 12 ? "pm" : "am";
  let minutes = String(now.getMinutes()).padStart(2, "0");
  let seconds = String(now.getSeconds()).padStart(2, "0");

  let timeString;
  if(showMillisecs){
    let milliseconds = String(now.getMilliseconds()).padStart(3, "0");
    timeString = `${hours}:${minutes}:${seconds}:${milliseconds} ${ampm}`;
    clock.innerText = timeString;
} else {
      timeString = `${hours}:${minutes}:${seconds} ${ampm}`;
      clock.innerText = timeString;
  }
}


setInterval(gettime, 100);
