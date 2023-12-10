// https://stackoverflow.com/questions/9335140/how-to-countdown-to-a-date;
const countdownDisplay = document.getElementById("countdown-display")

 const second = 1000;
 const minute = second * 60;
 const hour = minute * 60;
 const day = hour * 24;
 var timer = null;

function renderCountdown(){
    const currentDate = new Date(); // now
    const christmas2023 = new Date(2023,11,26,0,0,0); //Christmas
    const diff = christmas2023 - currentDate;
    
    if (diff < 0) {
        clearInterval(timer);
        return;
    }
    
    const days = Math.floor(diff / day);
    const hours = Math.floor((diff % day) / hour);
    const minutes = Math.floor((diff % hour) / minute);
    const seconds = Math.floor((diff % minute) / second);

    const christmas = 25
    const today = new Date().getDate();
    const remainingDays = christmas - today;
    
    countdownDisplay
        .textContent = `${days} days ${hours} hours ${minutes} minutes ${seconds} seconds`;
    
    // Task:
    // - Get today's date (you only need the day).
    // - Calculate remaining days.
    // - Display remaining days in countdownDisplay.
}
 
timer = setInterval(renderCountdown, 1000)

// Stretch goals:
// - Display hours, minutes, seconds.
// - Add a countdown for another festival, your birthday, or Christmas 2022.