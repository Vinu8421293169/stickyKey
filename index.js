let count = 0;
document.addEventListener("keydown", (event) => {
  if (event.key === "Shift" || event.key === "Enter") {
    count++;
    if (count === 1) {
      setTimeout(() => {
        count = 0;
      }, 3000);
    }
    if (count === 5) {
      console.log("Sticky Key");
      count = 0;
    }
  }
});
