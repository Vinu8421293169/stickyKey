let count = 0;
document.addEventListener("keydown", (event) => {
  if (event.key === "Shift" || event.key === "Enter") {
    count++;
  }
});

setInterval(() => {
  if (count >= 5) {
    console.log("sticky key");
  }
  count = 0;
}, 3000);
