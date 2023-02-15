const COUNTDOWN_FINISH_DATE = new Date("2023-02-17T14:00:00");

window.addEventListener("load", function() {
    requestAnimationFrame(function update() {
        var timeLeft = Math.max(COUNTDOWN_FINISH_DATE.getTime() - Date.now(), 0);

        document.querySelector(".countdownSeconds").textContent = String(Math.floor(timeLeft / 1_000) % 60).padStart(2, "0");
        document.querySelector(".countdownMinutes").textContent = String(Math.floor(timeLeft / (1_000 * 60)) % 60).padStart(2, "0");
        document.querySelector(".countdownHours").textContent = String(Math.floor(timeLeft / (1_000 * 60 * 60)) % 24).padStart(2, "0");
        document.querySelector(".countdownDays").textContent = String(Math.floor(timeLeft / (1_000 * 60 * 60 * 24))).padStart(2, "0");

        requestAnimationFrame(update);
    });
});