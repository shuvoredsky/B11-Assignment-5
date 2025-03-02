const days = ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"];
const monthsName = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
const currentDate = new Date();
const dayOfWeek = currentDate.getDay();
const year = currentDate.getFullYear();
const monthName = currentDate.getMonth();
const month = monthsName[monthName];
const current = days[dayOfWeek];
const date = currentDate.getDate();
const newDate = month + " " + date + " " + year;

document.getElementById("currentDate").innerText = current;
document.getElementById("currnt-date-module").innerText = newDate;


