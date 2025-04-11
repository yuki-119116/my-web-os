function updateTime()
{
  var currentTime = new Data().ToLocalString();
  var timeTest = 
    document.querySelector("#timeElement");
  timeText.innerHTML = currentTime;
}

setInterval(updateTime, 1000);

dragElement(document.getElementBy("mydiv"));
function dragElement(element)
{
  var initialX = 0;
  var initialY = 0;
  var currentX = 0;
  var currentY = 0;
}
