document.addEventListener('DOMContentLoaded', function() {
    const countdownDate = new Date("Aug 01, 2024 00:00:01").getTime();

    const timerFunction = function() {
        const now = new Date().getTime();
        const distance = countdownDate - now;

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        document.getElementById("timer").innerHTML = days + "d " + hours + "h "
        + minutes + "m " + seconds + "s ";

        if (distance < 0) {
            clearInterval(x);
            document.getElementById("timer").innerHTML = "EXPIRED";
        }
    };

    timerFunction(); // Initial call to set the timer immediately
    const x = setInterval(timerFunction, 1000); // Set interval to update every second
});
