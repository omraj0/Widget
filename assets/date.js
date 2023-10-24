const dayElement = document.querySelector(".day");
const dateElement = document.querySelector(".date");

/**
 * @param {Date} date
 */
function formatDay(date) {
    const DAYS = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
    ];

    return `${DAYS[date.getDay()]}`;
}

/**
 * @param {Date} date
 */
function formatDate(date) {
  const MONTHS = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];

  return `${MONTHS[date.getMonth()]} ${date.getDate()} ${date.getFullYear()}`;
}

setInterval(() => {
  const now = new Date();

  dayElement.textContent = formatDay(now);
  dateElement.textContent = formatDate(now);
}, 200);
