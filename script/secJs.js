const colors = [
  "bg-blue-100",
  "bg-green-100",
  "bg-yellow-100",
  "bg-indigo-100",
  "bg-purple-100",
  "bg-pink-100",
  "bg-teal-100",
  "bg-gray-100",
  "bg-slate-100",
  "bg-black-100",
  "bg-red-100",
];
document
  .getElementById("change-theme-btn")
  .addEventListener("click", function () {
    const body = document.getElementById("body");
    body.classList.remove(...colors);
    const themeColor = colors[Math.floor(Math.random() * colors.length)];
    body.classList.add(themeColor);
  });
document
  .getElementsByClassName("backBtn")
  .addEventListener("click", function () {
    console.log("click");
  });
