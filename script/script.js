const completeBtns = document.querySelectorAll(".btn-secondary");
const boxTitles = document.querySelectorAll(".box-title");

// for (let j = 0; j <= boxTitles.length; j++) {
//   const boxTitle = boxTitles[j];

//   console.log(boxTitle);
// }
for (let boxTitle of boxTitles) {
}

for (let i = 0; i < completeBtns.length; i++) {
  const completeBtn = completeBtns[i];
  completeBtn.addEventListener("click", function (event) {
    const taskAssigned = parseInt(
      document.getElementById("task-assign").innerText
    );
    const completeTask = parseInt(
      document.getElementById("complete-task").innerText
    );
    const boxTitles = document.querySelectorAll(".box-title");
    // for (let boxTitle of boxTitles) {
    //   console.log(boxTitle);
    // }
    console.log(boxTitles);
    const addClearHistory = document.getElementById("add-clear-history");
    const div = document.createElement("div");
    div.innerHTML = `
    <div class="bg-slate-100 h-[80px] w-[350px] mx-auto rounded-2xl py-2 px-2 mt-4">
                <p class="text-xl font-bold">You have completed</p>
              </div>
    `;
    addClearHistory.appendChild(div);

    sum = completeTask + 1;
    document.getElementById("complete-task").innerText = sum;
    minus = Math.max(0, taskAssigned - 1);
    document.getElementById("task-assign").innerText = minus;
    alert("alert hoiche");

    // event.target.completeBtn.disabled = true;
    event.target.classList.add("bg-gray-400", "cursor-not-allowed");
  });
}

const currentDate = new Date();
const dayOfWeek = currentDate.getDay();
const year = currentDate.getFullYear();
const date = currentDate.getDate();
const monthName = currentDate.getMonth();
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
const month = monthsName[monthName];
const current = days[dayOfWeek];
const newDate = month + " " + date + " " + year;

document.getElementById("currentDate").innerText = current;
document.getElementById("currnt-date-module").innerText = newDate;
document.getElementById("ques").addEventListener("click", function () {
  window.location = "./question.html";
});
