const generateRandomColor = function () {
  const hexValue = "0123456789ABCDEF";
  let color = "#";

  for (let index = 0; index < 6; index++) {
    color += hexValue[Math.floor(Math.random() * 16)];
  }

  return color;
};

let intervalID;

const startChangingBackgroundColor = function () {
  if (!intervalID) {
    intervalID = setInterval(changeBackgroundColor, 1000);
  }

  function changeBackgroundColor() {
    document.body.style.backgroundColor = generateRandomColor();
  }
};

const stopChangingBackgroundColor = function () {
  clearInterval(intervalID);
  intervalID = null;
};

document
  .querySelector("#startButton")
  .addEventListener("click", startChangingBackgroundColor);
document
  .querySelector("#stopButton")
  .addEventListener("click", stopChangingBackgroundColor);
