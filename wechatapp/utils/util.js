function formatTime(date) {  
  var year = date.getFullYear()  
  var month = date.getMonth() + 1  
  var day = date.getDate()  
  
  var hour = date.getHours()  
  var minute = date.getMinutes()  
  var second = date.getSeconds()  
  
  return [hour, minute].map(formatNumber).join(':')  
}  
  
function formatNumber(n) {  
  n = n.toString()  
  return n[1] ? n : '0' + n  
}  

function busTime(date) {  

  var hour = date.getHours()  
  var minute = date.getMinutes()  
  var sign =0;
  if (hour<=7){
    return 0;
  }
  else if (hour<=8){
    return 1;
  }
  else if (hour<=9&&minute<=30)
    return 2;
  else if (hour<13)
    return 3;
  else if (hour<15)
    return 4;
  else if (hour<18)
    return 5;
  else if (hour<=21)
    return 6;
  else if (hour<=21&&minute<=20)
    return 6;
  else if (hour>21)
    return 0; 
}  

module.exports = {  
  formatTime: formatTime,  
  busTime:busTime
}  