
// Set the date we're counting down to
var countDownDate = new Date("May 29, 2018 9:00:00").getTime();

// Update the count down every 1 second
var interval = setInterval(countDown, 1000);

function countDown() {

    var time = new Date().getTime();                      //time
    var difference = (countDownDate - time);
    //var difference = "19270495396";

    //Convert time in Day, Hours, Minutes, Seconds
    var day = Math.floor(difference / (1000 * 60 * 60 * 24));
    console.log("day " + day);

    var hour = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    console.log("hour " + hour);

    var minute = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    console.log("minutes " + minute);

    var second = Math.floor((difference % (1000 * 60)) / (1000));
    console.log("seconds " + second);

    printScreen(day, hour, minute, second);

    if (difference < 0) {
        clearInterval(interval);            //Stop Timer
        document.getElementById("counter").innerHTML = ("Time is up!!");
    }
}

//print in screen
function printScreen(day, hour, minute, second) {
    document.getElementById("counter").innerHTML = (day + " Days, " + hour + " Hours, "
            + minute + " Minutes, " + second + " Seconds");
}

