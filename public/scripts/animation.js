
//array of individal animation images
const charAnim = [
    "images/sprite_0.png",
    "images/sprite_1.png",
    "images/sprite_2.png",
    "images/sprite_3.png",
    "images/sprite_4.png",
    "images/sprite_5.png"
];


let timer = false;
let timeLeft = 300;
let currentFrame = 0;
let position = 0;
let frameCount = 0;
let timerLoop = null;

let xPos = 50;
let yPos = window.innerHeight - 150;

const content = document.getElementById("content");
const actBtn = document.getElementById("actBtn");
const imgEle = document.getElementById("charFrame");

display();

//timer display
function display(){
let minutes = Math.floor(timeLeft / 60);
let seconds = timeLeft % 60;

//formats countdown
content.textContent = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
}

//initalize character position
imgEle.style.transform = `translate(${xPos}px, ${yPos}px)`;

function gameMovement(){
    if(!timer){
        return;
    }

    xPos += 2;
    yPos -= 0.65;

    //resetting character psotion once at boundary
    if(xPos > window.innerWidth || yPos < window.innerHeight * 0.05){
        xPos = -150;
        yPos = window.innerHeight - 150;
    }

    imgEle.style.transform = `translate(${xPos}px, ${yPos}px)`;

    //changing frames
    frameCount++;
    if(frameCount >= 10){
        imgEle.src = charAnim[currentFrame];
        currentFrame = (currentFrame + 1) % charAnim.length;
        frameCount = 0; 
    }

    requestAnimationFrame(gameMovement);
}


actBtn.onclick = function(){
    if(!timer){
        timer = true;
        actBtn.textContent = "Stop";
        gameMovement();

        //starts inverations and countdown
        timerLoop = setInterval(() => {
            if(timeLeft > 0){
                timeLeft--;
                display();
            }
            else{
                //stopping timer
                stop();
            }
        }, 1000);
    }
    else{
        stop();
    }
};

function stop(){
    timer = false;
    clearInterval(timerLoop);
    timerLoop = null;
    actBtn.textContent = "Start Studying";
}

