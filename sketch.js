  let value = 0;
  var ball
  function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
  ball=createSprite(200,200,40,10)
  ground=createSprite(600,200,80,10)
}

function draw() {
  background(255,255,255);
  rect(25, 25, 50, 50);  
  mousePressed([event])
  function mousePressed() {
    if (value === 0) {
      value = 255;
    } else {
      value = 0;
    }
  }
  function mousePressed() {
    ellipse(mouseX, mouseY, 5, 5);
    // prevent default
    return false;
  }
  // returns a MouseEvent object
  // as a callback argument
  function mousePressed(event) {
  console.log(event);
  }
  function mouseDragged() {
    value = value + 5;
    if (value > 255) {
      value = 0;
    }
  }
  function mouseDragged() {
    ellipse(mouseX, mouseY, 5, 5);
    // prevent default
    return false;
  }
  function mouseDragged(event) {
    console.log(event);
  }
  
  drawSprites();
  }