function inputAdd(val) {
  document.getElementById("demo1").innerHTML = "Your address is confirmed as " + val + ".";
}

function inputAmt(val) {
 if (val < 0) {
  alert('Please enter a positive amount.')
   val = 0;}
  else {
    val = val;
  }
  document.getElementById("demo2").innerHTML = "Your amount is confirmed as $" + val + ".";
}
  
function inputOTP(val) {
 if (val.length != 6) {
  alert('Please enter the correct OTP');
}
}

