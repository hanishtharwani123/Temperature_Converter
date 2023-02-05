const calculateTemp = () => {
  let number = document.getElementById("temp").value;
  let tempSelected = document.getElementById("temp_diff");
  let valueTemp = temp_diff.options[tempSelected.selectedIndex].value;

  const celToFah = (cel) => {
    return Math.round((cel * 9) / 5 + 32);
  };

  const fehToCel = (feh) => {
    return Math.round(((feh - 32) * 5) / 9);
  };

  let result;
  if (valueTemp == "cel") {
    result = celToFah(number);
    document.getElementById("resultCon").innerHTML = `= ${result}°Celcius`;
  } else {
    result = fehToCel(number);
    document.getElementById("resultCon").innerHTML = `= ${result}°Fahrenheit`;
  }
};
