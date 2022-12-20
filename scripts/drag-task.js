let roof = document.getElementById('roof');
let wind = document.getElementById('window');
let wall = document.getElementById('wall');
let grass = document.getElementById('grass');

dragElement(roof);
dragElement(wind);
dragElement(wall);
dragElement(grass);

var roofRotation = 90;
var wallRotation = 0;
var windowRotation = 90;
var grassRotation = 0;

roof.style.transform = 'rotate(' + roofRotation + 'deg)';
wind.style.transform = 'rotate(' + windowRotation + 'deg)';

function getOffset(el) {
  const rect = el.getBoundingClientRect();
  return {
    left: rect.left + window.scrollX,
    top: rect.top + window.scrollY
  };
}

roof.ondblclick = function() {
        roofRotation = roofRotation + 90;
        roof.style.transform = 'rotate(' + roofRotation + 'deg)';

}
wind.ondblclick = function() {
        windowRotation = windowRotation + 90;
        wind.style.transform = 'rotate(' + windowRotation + 'deg)';
}

wall.ondblclick = function() {
        wallRotation = wallRotation + 90;
        wall.style.transform = 'rotate(' + wallRotation + 'deg)';
}

grass.ondblclick = function() {
        grassRotation = grassRotation + 90;
        grass.style.transform = 'rotate(' + grassRotation + 'deg)';
}


function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    // otherwise, move the DIV from anywhere inside the DIV:
   elmnt.onmousedown = dragMouseDown;

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    // stop moving when mouse button is released:
    validate()
    document.onmouseup = null;
    document.onmousemove = null;
  }

  function validate() {
     let roofBottom = getOffset(roof).top + roof.offsetHeight;
     let wallTop = getOffset(wall).top
     let grassTop = getOffset(grass).top
     let wallBottom = getOffset(wall).top + wall.offsetHeight;
     let grassWidthCenter = getOffset(grass).left + grass.offsetWidth / 2;
     let roofWidthCenter = getOffset(roof).left + roof.offsetWidth / 2;
     let wallWidthCenter = getOffset(wall).left + wall.offsetWidth / 2;
     let windowHeightCenter = getOffset(wind).top + wind.offsetHeight / 2;
     let windowWidthCenter = getOffset(wind).left + wind.offsetWidth / 2;
     let wallHeightCenter = getOffset(wall).top + wall.offsetHeight / 2;

     let isValidRotation = roofRotation % 360 == 0 && wallRotation % 180 == 0 && windowRotation % 180 == 0 && grassRotation % 180 == 0
     let isRoofAndWallConnected = Math.abs(roofBottom - wallTop) < 10 && Math.abs(roofWidthCenter - wallWidthCenter) < 10
     let isWindowInCenterOfWall = Math.abs(windowHeightCenter- wallHeightCenter) < 10 && Math.abs(windowWidthCenter - wallWidthCenter) < 10
     let isGrassAndWallConnected = Math.abs(wallBottom - grassTop) < 10 && Math.abs(grassWidthCenter - wallWidthCenter) < 10

     if (isValidRotation && isRoofAndWallConnected && isWindowInCenterOfWall && isGrassAndWallConnected) {
        	roof.classList.add("shake-animation")
        	wall.classList.add("shake-animation")
        	wind.classList.add("shake-animation")
        	grass.classList.add("shake-animation")
     }
  }
}