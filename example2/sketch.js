let r = 1;
let img;
let box1;
let size = 20;
function setup(){
  createCanvas(windowWidth,windowHeight,WEBGL)
  img = loadImage("https://images.squarespace-cdn.com/content/v1/544ef2b9e4b0fb116b1603f6/1507572590050-0HYMUD8KV8K42XE9G141/ke17ZwdGBToddI8pDm48kCHChmuivJZ1Va5ov3ZJeg17gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0ouw-8l5B_J38LMU7OZFvYcSGirBhY_3j1yQtntvGS73bypqQ-qjSV5umPUlGbQFAw/Trees+in+Field+.jpg?format=2500w");
box1 = new Kaste(size);
}



function draw(){
  background(0,100,0);
box1.display();

}
class Kaste{
  constructor(size){
    this.size = size;
  }
  display(){
    translate(-200,0,0);
    rotateY(r);
    push();
    texture(img);
    box(100,100);
    pop();
    r += 0.05;
  }
}
