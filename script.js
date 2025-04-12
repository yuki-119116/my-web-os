dragElement(document.getElementById("mydiv"));

function dragElement(element)
{
  var initialX = 0;
  var initialY = 0;
  var currentX = 0;
  var currentY = 0;
  var welcomeScreen = document.querySelector("#mydiv");
  var welcomeScreenClose = document.querySelector("#welcomeclose");
  var welcomeScreenOpen = document.querySelector("#welcomeopen");
  const header = document.getElementById(element.id + "header");

  const fixedWidth = welcomeScreen.offsetWidth;
  const fixedHeight = welcomeScreen.offsetHeight;

  if (header)
  {
    document.getElementById(element.id + "header").onmousedown = dragMouseDown;
  }
  else
  {
    element.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e)
    {
      e = e || window.event;
      e.preventDefault();
      initialX = e.clientX;
      initialY = e.clientY;
      document.onmouseup = closeDragElement;
      document.onmousemove = elementDrag;
    }
  
function elementDrag(e)
    {
      e = e || window.event;
      e.preventDefault();
      currentX = initialX - e.clientX;
      currentY = initialY - e.clientY;
      initialX = e.clientX;
      initialY = e.clientY;
      element.style.top = (element.offsetTop - currentY) + "px";
      element.style.left = (element.offsetLeft - currentX) + "px";
    }

  function closeDragElement() 
   {
  document.onmouseup = null;
  document.onmousemove = null;
   }  

  function closeWindow(element)
    {
      element.style.display = "none"
    }
  
  function openWindow(element)
    {
      element.style.display = "flex"
    }

  welcomeScreenClose.addEventListener("click", function()
    {
      closeWindow(welcomeScreen);
    });

   welcomeScreenOpen.addEventListener("click", function()
    {
      openWindow(welcomeScreen);
    });
  
}

function updateTime()
{
var currentTime = new Date().toLocaleString();
var timeText = document.querySelector("#timeElement");
 if (timeText)
 {
   timeText.innerHTML = currentTime;
 }
  else
 {
   console.log("⚠️ timeElement not found in the DOM.");
 }
}
setInterval(updateTime, 1000);
