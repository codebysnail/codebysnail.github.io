function calculateSum() {
  const currentDate = new Date();
  const month = (currentDate.getMonth() + 1).toString();
  const date = currentDate.getDate().toString();
  const dayOfWeek = currentDate.getDay();
  let sum1 = 0;
  let sum2 = 0;

  for (let i = 0; i < month.length; i++) {
    sum1 += parseInt(month[i], 10);
  }

  for (let i = 0; i < date.length; i++) {
    sum2 += parseInt(date[i], 10);
  }

  sum1 += dayOfWeek;
  sum2 += dayOfWeek;

  return sum1.toString().padStart(2, "0") + sum2.toString().padStart(2, "0");
}

function calc() {
  const currentDate = new Date();
  const month1 = (currentDate.getMonth() + 1) % 10;
  const month2 = Math.floor(currentDate.getMonth() / 10);
  const date1 = currentDate.getDate() % 10;
  const date2 = Math.floor(currentDate.getDate() / 10);
  const hour1 = currentDate.getHours() % 10;
  const hour2 = Math.floor(currentDate.getHours() / 10);
  const dayOfWeek = currentDate.getDay();

  const firstNumber = Math.abs(month1 - month2);
  const secondNumber = Math.abs(date1 - date2);
  const thirdNumber = Math.abs(hour1 - hour2);
  const fifthNumber = firstNumber + secondNumber + thirdNumber;
  const newPart1 = fifthNumber * dayOfWeek;
  const newPart2 = fifthNumber + dayOfWeek;

  return newPart1.toString().padStart(2, "0") + newPart2.toString().padStart(2, "0");
}

function calc2() {
  const currentDate = new Date();
  const month1 = (currentDate.getMonth() + 1) % 10;
  const month2 = Math.floor(currentDate.getMonth() / 10);
  const date1 = currentDate.getDate() % 10;
  const date2 = Math.floor(currentDate.getDate() / 10);
  const dayOfWeek = currentDate.getDay();

  const firstNumber = month1 + month2 + dayOfWeek;
  const secondNumber = date1 + date2 + dayOfWeek;
  const num7 = Math.floor(firstNumber / 10);
  const num8 = firstNumber % 10;
  const num9 = Math.floor(secondNumber / 10);
  const num10 = secondNumber % 10;
  const num11 = Math.abs(num8 - num7);
  const num12 = Math.abs(num10 - num9);

  return (num11 * num12).toString().padStart(2, "0") + (num11 + num12).toString().padStart(2, "0");
}

function displaySum() {
  document.getElementById("registeCode").textContent = `注册码 Ctrl+PY+${calculateSum()}`;
  document.getElementById("backCode").textContent = `新后台码 Ctrl+FPI+${calc()}`;
  document.getElementById("oldbackCode").textContent = `旧后台码 Ctrl+FPI+${calc2()}`;
}

setInterval(displaySum, 1000);
displaySum();
