const completeBtns = document.querySelectorAll(".btn-secondary");
const boxTitles = document.querySelectorAll(".box-title");


for (let i = 0; i < completeBtns.length; i++) {
  const completeBtn = completeBtns[i];
  
  completeBtn.addEventListener("click", function (event) {
    const taskAssigned = parseInt(
      document.getElementById("task-assign").innerText
    );
    console.log(taskAssigned)
    
    const completeTask = parseInt(
      document.getElementById("complete-task").innerText
    );
    completeBtn.disabled = true;
    const boxTitles = document.querySelectorAll("h1.box-title");
    
    


const parentNode= event.target.parentNode.parentNode.parentNode.children[1].innerText;

const currentDate = new Date();
const dayOfWeek = currentDate.getDay();
const year = currentDate.getFullYear();
const date = currentDate.getDate();

const options = {
	hour: '2-digit',
	minute:'2-digit',
	second: '2-digit',
	hour12: true,
	timeZone: 'Asia/Dhaka'

};

const timeString = currentDate.toLocaleString('en-US', options);


    const addClearHistory = document.getElementById("add-clear-history");

    const div = document.createElement("div");
    div.innerHTML = `
    <div id= "clearAllHistory">
    <div id="clearHistoryText" class="bg-slate-100 h-[80px] w-[350px] mx-auto rounded-2xl py-2 px-2 mt-4">
                <p class="text-xl font-bold text-center opacity-55">You have completed <span>${parentNode}</span> at <span>${timeString}</span></p>
              </div>
    </div>
    `;
    addClearHistory.appendChild(div);

    sum = completeTask + 1;
    document.getElementById("complete-task").innerText = sum;
    minus = Math.max(0, taskAssigned - 1);
    document.getElementById("task-assign").innerText = minus;
    alert("Board Update Successfully");

    if(taskAssigned === 1){
      alert('congrates!!! You have completed all the current task.');
    }

    
    event.target.classList.add("bg-gray-400", "cursor-not-allowed");
  });
}
document.getElementById('clear-hitory-btn').addEventListener('click', function(){
  const addClearHistory = document.getElementById("clearAllHistory");
  
  if(addClearHistory){
    addClearHistory.remove();
  }
})



document.getElementById("ques").addEventListener("click", function () {
  window.location = "./question.html";
});
