const days = ["sunday","monday","tuesday","wednesday","thursday","friday","saturday"]
const maleName = ["kwasi","kwadwo","kwabena","kwaku","yaw","kofi","kwame"]
const femaleName = ["akosua","adwoa","abenaa","akua","yaa","afua","ama"]

function isLeapYear(year) {
  return (year/4 === 0)
}

function getDaysInMonth (month, year) {
  const daysInMonth = {
    1: 31,
    2: isLeapYear(year) ? 29 : 28,
    3: 31,
    4: 30,
    5: 31,
    6: 30,
    7: 31,
    8: 31,
    9: 30,
    10: 31,
    11: 30,
    12: 31
  };
  return daysInMonth[month];
}

function isValidDate(day, month, year){
  if (!day || !month || !year){
    alert("Please Enter A Valid Date");
    return false;
  }
}

if (!day || !month || !year || !gender) {
  alert("Complete All Fields");
  return;
}

const maxDays = getDaysInMonth(month, year);
if (day<1 || day>maxDays ){
  alert("Enter valid day");
  return false;
}

if (month <1 || month > 12) {
  alert("Enter valid month");
  return;
}

if (year < 1900 || year > 2026) {
  alert("Enter valid year");
  return false;
}

if (!gender) {
  alert("Please select your gender");
  return;
}



//d=((4CC​−2×CC−1)+(45×YY​)+(1026×(MM+1)​)+DD)mod7//
//CC is the first two digits of the year//
//YY is the last two digits of the year//
//MM is the month//
//DD is the day of the month//
//mod is the modulus operator %//

function calculateDay(CC, YY, MM, DD) {
  const term1 = Math.floor((CC/4) - 2 * (CC - 1));
  const term2 = Math.floor((5 * YY)/4);
  const term3 = Math.floor((26 * (MM + 1))/10);

  let d= (term1 + term2 + term3 + DD)% 7;
  return d < 0 ? d + 7: d;
}

const dayIndex = calculateDay(day, month, year);
const akanName = gender === 'male' ? maleNames[dayIndex] : femaleNames[dayIndex];

function getAkanName(){
  const day = document.getElementById("day").value; 
  const month = document.getElementById("month").value; 
  const year = document.getElementById("year").value; 
  const gender = document.getElementById("gender").value; 
}

document.getElementById('result').innerHTML = ` <div class="result-card">
  <h2>Your Akan Identity</h2>
    <span class="akan-name">${akanName}</span>
    <p>Born on <strong>${dayOfWeek}</strong></p>
    <p>Date: ${day}/${month}/${year}</p>
    <p>Gender: ${gender === "male" ? "Male" : "Female"}</p>
    <p class="tradition">"${akanName}" is the traditional Ghanaian name for ${gender === "male" ? "males" : "females"} born on ${dayOfWeek}s</p>
  </div> `;