function setup() {
  createCanvas(800,600)
  angleMode(PIE)
}

function draw() {
  background(255)
  translate(width/2,height/2);
  
  stroke(0);
  strokeWeight(4);
  fill(20,100,12);
  ellipse(0,0,480);
  
  
  
  // seconds
  clockHandS(second(),60,10,270,0);
  
  //minutes
  clockHandM(minute(),60,25,180,0);
  
  // hours
  if (hour()>12) {
    var hour12 = hour()-12
  } else {
    var hour12 = hour()
  }
  clockHandH(hour12,12,50,90,0);
  
 
  
  
}

function clockHandS(timeValue,range,size,radius,col){
  push()
  rotate(-HALF_PI)
  var angle = map(timeValue,0,range,0,TWO_PI)
  fill(255,0,0)
  stroke(col)
  strokeWeight(4)
  // line(0,0,radius*cos(angle),radius*sin(angle))
  arc(0, 0, radius, radius, 0, angle, PIE);
  pop()
  
}

function clockHandM(timeValue,range,size,radius,col){
  push()
  rotate(-HALF_PI)
  var angle = map(timeValue,0,range,0,TWO_PI)
  fill(255,255,0)
  stroke(col)
  strokeWeight(4)
  // line(0,0,radius*cos(angle),radius*sin(angle))
  arc(0, 0, radius, radius, 0, angle, PIE);
  pop()
  
}

function clockHandH(timeValue,range,size,radius,col){
  push()
  rotate(-HALF_PI)
  var angle = map(timeValue,0,range,0,TWO_PI)
  fill(0,255,255)
  stroke(col)
  strokeWeight(4)
  // line(0,0,radius*cos(angle),radius*sin(angle))
  arc(0, 0, radius, radius, 0, angle, PIE);
  pop()
  
}