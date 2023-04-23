let level = 1;
let clicks = 0;
let timeout = 500;
const button = document.getElementById("buton1");
let transitionspeed = 500;

button.style.transition = transitionspeed + "ms";
button.style.position = "absolute";

button.addEventListener("mouseover", moveButton);

function moveButton() {
  const marginTop = Math.random() * 300 + "px";
  const marginLeft = Math.random() * 300 + "px";
  button.style.marginTop = marginTop;
  button.style.marginLeft = marginLeft;
}

button.addEventListener("click", handleButtonClick);

function handleButtonClick() {
  clicks++;
  console.log(clicks);
  if (clicks === 3) {
    clearTimeout(timerId); // We empty timeout count if 3 clicks are achieved
    alert(`Congratulations! You won level ${level}.`);
    level++;
    clicks = 0;
    transitionspeed -= 100;
    timeout-=100;
    button.style.transition = transitionspeed + "ms";
    button.style.transition = transitionspeed + "ms";
    if (level === 7) {
      alert("You won the game!");
      return;
    }
  }
}

let timerId; // Tımeout ID

button.addEventListener("mousedown", function() {
  // We smart timeout 
  timerId = setTimeout(function() {
    clicks = 0; // Reset clicks count if timeout expires
    console.log("Time ekspired, clicks reset.");
  }, timeout);
});

button.addEventListener("mouseup", function() {
  // Clear the timeout if the button is released before timeout expires
  clearTimeout(timerId);
});
