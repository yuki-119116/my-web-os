function updateTime()
{
  var currentTime = new Data().ToLocalString();
  var timeTest = 
    document.querySelector("#timeElement");
  timeText.innerHTML = currentTime;
}

setInterval(updateTime, 1000);
