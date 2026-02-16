
var x = 80;

function setup(){
    //creates canvas that is the same size of users window
createCanvas(windowWidth, windowHeight);

}

function draw(){
    //resizes canvas when the users window changes
    resizeCanvas(windowWidth, windowHeight);
    background(150, 140, 50);

    //temp object
    fill(100, 70, 200);
    rect(x, 220, 80, 60);

    //to move the object and just test out how movement would work
    x = x + 1;
}