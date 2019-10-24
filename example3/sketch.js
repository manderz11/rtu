
let n = 0.0;
let x = [];
let y = [];
let incr = 0.1;



function setup(){
createCanvas(windowWidth,windowHeight);
background(100,50,100)

for(let i = 0; i<13; i++){

x[i] =  random(0, windowWidth);
y[i] =  random(0, windowHeight);
}
}
function draw(){
frameRate(15);
n+=incr;

    let pos = noise(n)*100;
for(let i = 0; i<13; i++){

  stroke (random(0,255),150,200,30);
line(x[i]+pos,y[i]+random(0,100),x[i]+pos,y[i]+random(0,50));

}

incr+=0.5;
}
