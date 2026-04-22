// just for testing
const calendar = document.querySelector("calendar-view");

    calendar.addEventListener("date-selected", (e) => {
        console.log("Selected date: " + e.detail.date);
    });