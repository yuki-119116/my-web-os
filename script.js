dragElement(document.getElementById("mydiv"));
dragElement(document.getElementById("notes"));

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

  function openWindow(element)
    {
      element.style.display = "flex"
    }
  
  function closeWindow(element)
    {
      element.style.display = "none"
    }
  
let selectedIcon = null;

function selectIcon(element)
  {
  element.classList.add("selected");
  selectedIcon = element;
  }

function deselectIcon(element)
  {
  element.classList.remove("selected");
  selectedIcon = null;
  }

  function handleIconTap(element)
{
  const appWindow = document.getElementById("notes");

      if (element.classList.contains("selected")) 
 {
    deselectIcon(element);
    openWindow(appWindow);
  } 
     else 
  {
    selectIcon(element);
  }
}


function updateTime() 
{
  const timeText = document.querySelector("#timeElement");
  if (timeText) 
  {
    timeText.innerHTML = new Date().toLocaleString();
  } else 
  {
    console.log("⚠️ timeElement not found in the DOM.");
  }
}
setInterval(updateTime, 1000);

document.getElementById("notesclose").addEventListener("click", () => {
  closeWindow(document.getElementById("notes"));

  document.querySelector("#desktopApps div").addEventListener("click", function () {
  handleIconTap(this);
});
  
