function setup() {
    createCanvas(windowWidth, windowHeight);
    colorMode(RGB);
    
    mic = new p5.AudioIn();
    mic.start();    
    
    frameRate(20);
}

function draw() {
    var volume = mic.getLevel();
    var newMax = 1;
    
    background(103,34,255);
    translate(0,height/2);
    
    var x = map(volume,0,1,0,height/2);
        
    noStroke();
    fill(199,x+20,67.5);
    
    for(var a=width/16; a<width-width/16; a+=30) {
        rect (a,0,20,random(-x*2,x*2));
    }     
    
    
    
}

function windowResized() {
    resizeCanvas(windowWidth,windowHeight);
}
