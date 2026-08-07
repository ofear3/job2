function updateDateTime() {

    const now = new Date();

    document.getElementById("currentDate").innerHTML =
        now.toLocaleDateString("en-US", {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric"
        });

    document.getElementById("currentTime").innerHTML =
        now.toLocaleTimeString("en-US");

    document.getElementById("year").innerHTML =
        now.getFullYear();

}

updateDateTime();

setInterval(updateDateTime, 1000);