$(document).ready(function(){
  "use strict"
  
paper.install(window);
paper.setup(document.getElementById('mainCanvas'));
//to do

var d = Shape.Circle(165, 165, 25);
var e = Shape.Circle(235, 165, 25);
var c = Shape.Circle(200, 200, 50);
var f = Shape.Circle(200,200, 7);
var g = Shape.Circle(180,180, 10);
var h = Shape.Circle(220, 180, 10);
c.fillColor ="#d3d3d3";
d.fillColor ="black";
e.fillColor ="black";
f.fillColor ="black";
g.fillColor ="black";
h.fillColor ="black";
  
let tool= new Tool();
tool.onMouseDown =function(event){
  let c =Shape.Circle(event.point.x, event.point.y,20);
  c.fillColor= "blue";
}


//to do
paper.view.draw();
});
