let f=0;

function setup() {
  createCanvas(800, 800);
}

function draw() {
  
  //background(220);
  //若壓下滑鼠，換筆刷2
  //若壓下滑鼠，換筆刷1
  
   if(mouseIsPressed){
     
    circle(mouseX,mouseY,20+5*sin(f));
     
    fill(mouseX,mouseY,150);
     }
  
  else{
  
  noStroke();
    
  quad(mouseX,50,20+1*sin(f),20+1*sin(f));
  
  ellipseMode(RADIUS);
  
  ellipse(mouseX, mouseX, 20+5*sin(f), 20+5*sin(f));
  
  // Outer white ellipse
  
  ellipseMode(CENTER);
  
  ellipse( mouseY, 20+5*sin(f), 20+5*sin(f)); // Inner gray ellipse
  
  triangle(mouseX,mouseY, mouseX, mouseX, 30, 60);
  
  fill(mouseX,mouseY,150,150);
  
  }
    
  f=f+0.1;
    
}