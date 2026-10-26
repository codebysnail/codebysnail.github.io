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

// FpiDynamicCode.exe 的算法（.NET 版动态登录码）
function fpiDynamicCode() {
  const d = new Date();
  const month = d.getMonth() + 1;

  // H = |时十位-时个位| + |月十位-月个位| + |日十位-日个位|
  const H =
    Math.abs(Math.floor(d.getHours() / 10) - (d.getHours() % 10)) +
    Math.abs(Math.floor(month / 10) - (month % 10)) +
    Math.abs(Math.floor(d.getDate() / 10) - (d.getDate() % 10));

  const W = d.getDay(); // 与 .NET DayOfWeek 一致：周日=0 … 周六=6
  const B = H * W;
  const C = H + W;

  // B、C 十进制拼接，左补齐到3位、右补齐到4位，补位字符按奇偶取 '0'/'1'
  let mid = B.toString() + C.toString();
  mid = mid.padStart(3, (B % 2).toString()[0]);
  mid = mid.padEnd(4, (C % 2).toString()[0]);

  // YYYYMMDD 共 8 位数字逐位相加
  const y = d.getFullYear();
  const sum =
    Math.floor(y / 1000) + (Math.floor(y / 100) % 10) + (Math.floor(y / 10) % 10) + (y % 10) +
    Math.floor(month / 10) + (month % 10) +
    Math.floor(d.getDate() / 10) + (d.getDate() % 10);
  const s = sum.toString();

  const d1 = s[0];
  const d2 = s.length > 1 ? s[1] : "0";
  return `Ctrl + FPI + ${d1}${mid}${d2}`;
}

function displayFpiCode() {
  document.getElementById("fpiDynamicCode").textContent = `FPI动态码 ${fpiDynamicCode()}`;
}

setInterval(displayFpiCode, 1000);
displayFpiCode();
