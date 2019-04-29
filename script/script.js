$(document).ready(function(){
  $('.sidenav').sidenav();
  $(".dropdown-trigger").dropdown();
  $('.tooltipped').tooltip();
});
var canvas = new fabric.Canvas('canvas');
var ctx = canvas.getContext("2d");
var circleCount = 100;
var squareCount = 100;
var triangleCount = 100;
var lineCount = 100;
var polygonCount = 100;
var curveCount = 100;
var thickness = Number(document.getElementById("thickness").value);
var color = document.getElementById("pickColor").value;
var filled = document.getElementById("filled").checked;
var fillColor;




$(document).on("change", function() {
  color = document.getElementById("pickColor").value;
  filled = document.getElementById("filled").checked;
  thickness = Number(document.getElementById("thickness").value);
  if(filled) {
    fillColor = color;
  } else {
    fillColor = 'rgba(0,0,0,0)'
  }
})


$(document).on("keydown", function(e) {
  var key = event.keyCode || event.charCode;

  if(key == 8 || key == 46) {
    deleteObject();
    console.log("KEY PRESSED");
  }
})


console.log(color)
function saveProgram() {
  if (confirm("Close Window?")) {
      alert("Saved");
  }
}

function drawLine() {
  console.log("Drawing line...")
  console.log(thickness)
  var line = new fabric.Line([50,100,200,200],{
      strokeWidth: thickness,
      stroke: color,
      top: lineCount,
      left: lineCount,
      angle: 60,
  })
  canvas.add(line);
  lineCount+=50;
}

function drawCircle() {
  console.log("Drawing circle...")
  console.log(filled);
  
  var circle = new fabric.Circle({
      radius: 60, 
      stroke: color,
      strokeWidth: thickness,
      fill: fillColor, 
      left: circleCount, 
      top: circleCount,
      angle: 0
  });
  canvas.add(circle);
  circleCount+=50;
}

function drawSquare() {
  console.log("Drawing square...")
  var square = new fabric.Rect({
      left: squareCount,
      top: squareCount,
      strokeWidth: thickness,
      stroke: color,
      fill: fillColor,
      width: 100,
      height: 100,
      angle: 0
  });
  canvas.add(square);
  squareCount+=50;
}

function drawTriangle() {
  console.log("Drawing triangle...")
  var triangle = new fabric.Triangle({
      width: 100, 
      height: 100,
      stroke: color, 
      strokeWidth: thickness,
      fill: fillColor, 
      left: triangleCount, 
      top: triangleCount, 
      angle: 0
      });
      canvas.add(triangle)
      triangleCount+=50;
}

function drawPolygon() {
  console.log("Drawing polygon...")
  var number = Number(document.getElementById("polygonInput").value);

  var sides = [];


  switch(number) {
    case 3:
      console.log("3")
      var sides = [
        {x: 50, y: 200},
        {x: 125, y: 50},
        {x: 200, y: 200}];
      break;
    case 4:
      console.log("4");
      var sides = [
        {x: 50,  y: 50},
        {x: 200, y: 50},
        {x: 200, y: 200},
        {x: 50, y: 200}];
      break;
    case 5:
      console.log("5");
      var sides = [
        {x: 200, y: 0},
        {x: 250, y: 50},
        {x: 250, y: 100},
        {x: 150, y: 100},
        {x: 150, y: 50}];
      break;
    default:
      console.log("6")
      var sides = [
        {x: 200, y: 0},
        {x: 250, y: 50},
        {x: 250, y: 125},
        {x: 200, y: 175},
        {x: 150, y: 125},
        {x: 150, y: 50}]
  }
  



  var polygon = new fabric.Polygon(sides, {
      left: polygonCount,
      top: polygonCount,
      angle: 0,
      stroke: color,
      strokeWidth: thickness,
      fill: fillColor
    }
  );
  canvas.add(polygon);
  polygonCount+=50;
}

function resetCanvas() {
  canvas.clear();
  circleCount = 100;
  squareCount = 100;
  triangleCount = 100;
  lineCount = 100;
  polygonCount = 100;
  curveCount = 100;
}

function deleteObject() {
  console.log("DELETING....")
  var activeObject = canvas.getActiveObjects();
  console.log("ACTIVE object ", activeObject.length)
  
  if(activeObject.length == 0 ) {
    alert("Please select object(s) to delete.")
  } 
  else {
      if (confirm('Are you sure?')) {
        activeObject.forEach(function(item) {
          canvas.remove(item);
        })
          
      }
  } 
}