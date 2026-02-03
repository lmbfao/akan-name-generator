//CALCULATION FORMULA FOR DAY OF THE WEEK//
//d=((4CC​−2×CC−1)+(45×YY​)+(1026×(MM+1)​)+DD)mod7//
  //CC is the first two digits of the year//
  //YY is the last two digits of the year//
  //MM is the month//
  //DD is the day of the month//
  //mod is the modulus operator %//

//arrays//
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
const femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];

//functions//
function isLeapYear(year) {
  return (year % 4 === 0) && (year % 100 !== 0 || year % 400 === 0);
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

function getAkanName(){
 const day = parseInt(document.getElementById("day").value); 
 const month = parseInt(document.getElementById("month").value); 
 const year = parseInt(document.getElementById("year").value);
 const gender = document.getElementById("gender").value;

//validation//
  if (!gender) {
    alert("Please select your gender");
    return;
  }

  if (!day || !month || !year || !gender) {
    alert("Complete All Fields");
    return false;
  }

  if (month <1 || month > 12) {
    alert("Enter valid month");
    return false;
  }

  if (year < 1900 || year > 2026) {
    alert("Enter valid year");
    return false;
  }

  const maxDays = getDaysInMonth(month, year);
  if (day<1 || day>maxDays ){
    alert("Enter valid day");
    return false;
  }


const CC = Math.floor(year / 100);
let YY = year % 100;
let MM = month;
const DD = day;

  if (MM < 3) {
    MM += 12;
    YY -= 1;
  }

//result//
const dayIndex = calculateDay(CC, YY, MM, DD);
const dayOfWeek = days[dayIndex];
const akanName = gender === "male" ? maleNames[dayIndex] : femaleNames[dayIndex];

//calculation//
function calculateDay(CC, YY, MM, DD) {
   const term1 = Math.floor (((4 * CC) - 2) * CC - 1);
   const term2 = Math.floor(20 * YY);
   const term3 = Math.floor(2.6 * (MM + 1));
   let d= ((term1 + term2 + term3 + DD) % 7);
    if (d < 0) {
      d += 7;
    }
    return d;
  }

  //result//
  document.getElementById('result').innerHTML = 
  ` <div class="result-card">
    <h2>Your Akan Identity</h2>
      <span class="akan-name">${akanName}</span>
      <p>Born on <strong>${dayOfWeek}</strong></p>
      <p>Date: ${day}/${month}/${year}</p>
      <p>Gender: ${gender === "male" ? "Male" : "Female"}</p>
      <p class="tradition">"${akanName}" is the traditional Ghanaian name for ${gender === "male" ? "males" : "females"} born on ${dayOfWeek}s</p>
  </div> `;
}

  //event listeners//
document.addEventListener('DOMContentLoaded', function() {
  const generateBtn = document.getElementById('generate');
  if (generateBtn) {
    generateBtn.addEventListener('click', getAkanName);
}
    
  const inputs = document.querySelectorAll('input, select');
  inputs.forEach(input => {
    input.addEventListener('keypress', function(event) {
      if (event.key === 'Enter') {
        getAkanName();
      }
    });
  });
});