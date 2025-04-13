 function closeWindow(element)
    {
      element.style.display = "none";
    }
  
  function openWindow(element)
    {
      element.style.display = "flex";
    }

document.addEventListener("DOMContentLoaded", function () {
  const notesClose = document.getElementById("notesclose");
  const notesWindow = document.getElementById("notes");

  console.log("notesClose:", notesClose);
  console.log("notesWindow:", notesWindow);

  if (notesClose && notesWindow) {
    notesClose.addEventListener("click", function () {
      closeWindow(notesWindow);
    });
  }

  dragElement(notesWindow);

  const welcomeScreen = document.getElementById("mydiv");
  if (welcomeScreen) dragElement(welcomeScreen);

const menuItems = document.querySelectorAll("#notesMenu .menu-item");
const contentSections = document.querySelectorAll(".notes-content-section");

 menuItems.forEach(item => 
  {
    item.addEventListener("click", function ()
     {
      const targetId = this.getAttribute("data-target");

     menuItems.forEach(i => i.classList.remove("selected"));
      this.classList.add("selected");

     contentSections.forEach(section => 
      {
        section.style.display = "none";
      });

      const targetSection = document.getElementById(targetId);
      if (targetSection) 
      {
        targetSection.style.display = "block";
      }
    });
  });
});

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

 if (element.id === "mydiv")
 {
  welcomeScreenClose.addEventListener("click", function()
    {
      closeWindow(welcomeScreen);
    });

   welcomeScreenOpen.addEventListener("click", function()
    {
      openWindow(welcomeScreen);
    });
 }
  
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


let selectedIcon;
function selectIcon(element)
{
  element.classList.add("selected");
  selectedIcon = element;
}

function deselectIcon(element)
{
  element.classList.remove("selected");
  selectedIcon = undefined;
}

function handleIconTap(element)
{
 const notes = document.getElementById("notes");
 
  if (element.classList.contains("selected"))
  {
    deselectIcon(element);
    closeWindow(notes);
  }
  else
  {
   selectIcon(element);
   openWindow(notes);
  }
}
