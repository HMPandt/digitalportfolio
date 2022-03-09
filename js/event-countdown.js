console.log("main loaded");
const timeInput = document.querySelector(".time-input");
const button = document.querySelector(".submit");
const countdownDiv = document.querySelector(".timer")
const daySpan = document.querySelector(".day");
const hourSpan = document.querySelector(".hour");
const minSpan = document.querySelector(".min");
const secSpan = document.querySelector(".sec");
const announcementDiv = document.querySelector(".announcement");
let timer = null;

button.addEventListener("click", () => // with this you can write your own function in the eventlistener () => {}
{
    calcTime(new Date(timeInput.value)); //the value is the selected date 
    localStorage.setItem("eventDate", JSON.stringify(timeInput.value));
});

//JSON is another type of language: {"firstName" : "Joe"} 
//JSON.parse is the element you use to convert JSON to JavaScript exp =  
//let text = '{ "employees" : [' +
//'{ "firstName":"John" , "lastName":"Doe" },' +
//'{ "firstName":"Anna" , "lastName":"Smith" },' +
//'{ "firstName":"Peter" , "lastName":"Jones" } ]}';
//const obj = JSON.parse(text);

start(); //this starts the next function 

function start() {
    const eventDate = JSON.parse(localStorage.getItem("eventDate"));
    if (eventDate) {
        calcTime(new Date(eventDate)); //this will calculate the time it will take till the selected event 
    }
}

//this is the function that calculate the date
function calcTime(dateEvent) {
    announcementDiv.classList.add("hide"); //this wil hide the announcementDiv 
    clearInterval(timer);
    const dateToday = new Date();
    let timeRemaining = dateEvent - dateToday;
    if (timeRemaining > 0) {
        startCountdown(timeRemaining);
        countdownDiv.classList.remove("hide");//this wil hide the countdownDiv when its done
    } else {
        timeHasPassed(timeRemaining < -86400000);
    }
}

// this function starts the countdown 
function startCountdown(timeRemaining) {
    timeRemaining -= 1000;
    updateScreen(timeRemaining);
    timer = setInterval(() => {
        timeRemaining -= 1000;
        if (timeRemaining <= 0) {
            clearInterval(timer);
            timeHasPassed(false)
            return;
        }
        updateScreen(timeRemaining);
    }, 1000);
}

function updateScreen(timeRemaining) {
    const day = timeRemaining / (3600000 * 24);
    daySpan.textContent = Math.floor(day); //this is the countdown for the days 
    timeRemaining %= (3600000 * 24);
    const hour = timeRemaining / 3600000;
    hourSpan.textContent = Math.floor(hour); //this is the countdown for the hours
    timeRemaining %= 3600000;
    const min = timeRemaining / 60000;
    minSpan.textContent = Math.floor(min); //this is the countdown for the minutes
    timeRemaining %= 60000;
    const sec = timeRemaining / 1000;
    secSpan.textContent = Math.floor(sec); //this is the countdown for the seconds
}

function timeHasPassed(moreThanADay) {
    if (moreThanADay) {
        announcementDiv.textContent = "Het event is helaas al geweest."
    }else {
        announcementDiv.textContent = "Het event is hier!!!!"
    }
    announcementDiv.classList.remove("hide");
    localStorage.removeItem("eventDate")
}
