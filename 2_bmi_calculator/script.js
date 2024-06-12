const form = document.querySelector("form");

form.addEventListener("submit", (eventObject) => {
  eventObject.preventDefault();

  const height = parseInt(document.querySelector("#height").value);
  const weight = parseInt(document.querySelector("#weight").value);
  const result = document.querySelector("#result");

  if (height === "" || height < 0 || isNaN(height)) {
    result.innerHTML = "Please add valid height!";
  } else if (weight === "" || weight < 0 || isNaN(weight)) {
    result.innerHTML = "Please add valid weight!";
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    const bmiToNumber = Number(bmi);

    console.log(bmiToNumber);

    switch (true) {
      case bmiToNumber <= 18.6:
        result.innerHTML = `<span>You are under weight. You BMI is ${bmiToNumber}</span>`;
        break;
      case bmiToNumber >= 18.6 && bmiToNumber <= 24.9:
        result.innerHTML = `<span>You are normal weight. You BMI is ${bmiToNumber}</span>`;
        break;
      case bmiToNumber >= 24.9:
        result.innerHTML = `<span>You are over weight. You BMI is ${bmiToNumber}</span>`;
        break;
    }
  }
});
