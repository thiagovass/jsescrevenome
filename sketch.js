function setup() {
    createCanvas(800*2, 800*2);
      background("white");
  }
  
  function draw() {
  

    stroke("black");
    fill("red");
    
    if(mouseIsPressed) {
    rect(mouseX,mouseY,80,80);
    }
  }