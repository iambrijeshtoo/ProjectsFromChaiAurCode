const buttons = document.querySelectorAll(".button");
const body = document.querySelector("body");

buttons.forEach((button) => {
  // console.log(button);
  button.addEventListener("click", (eventObject) => {
    // console.log(eventObject);
    // console.log(eventObject.target);
    switch (eventObject.target.id) {
      case "green":
        body.style.backgroundColor = "#04e762";
        break;
      case "yellow":
        body.style.backgroundColor = "#f5b700";
        break;
      case "blue":
        body.style.backgroundColor = "#00a1e4";
        break;
      case "pink":
        body.style.backgroundColor = "#dc0073";
        break;
      case "light-green":
        body.style.backgroundColor = "#89fc00";
        break;
      default:
        break;
    }
  });
});

// button.addEventListener("click", (e) => {
//   console.log(e);
//   console.log(e.target);
// });

{
  {
    {
    }
  }
}
