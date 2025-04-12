dragElement(document.getElementById("mydiv"));

function dragElement(element)
{
  var initialX = 0;
  var initialY = 0;
  var currentX = 0;
  var currentY = 0;
  var welcomeScreen = document.querySelector("#welcome");
  var welcomeScreenClose = document.querySelector("#welcomeclose");
  var welcomeScreenOpen = document.querySelector("#welcomeopen");

  if (document.getElementById(element.id + "header"))
  {
    document.getElementById(element.id + "header").onmousedown = dragMouseDown;
  }
  else
  {
    element.onmousedown = dragMouseDown;
  }

  function startDragging(e)
    {
      e = e || window.event;
      e.preventDefault();
      initialX = e.clientX;
      initialY = e.clientY;
      document.onmouseup = stopDragging;
      document.onmousemove = dragElement;
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

  function stopDragging() 
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
