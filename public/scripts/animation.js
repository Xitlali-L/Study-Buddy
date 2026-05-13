
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
let timeLeft = 1800;  //30 minutes
let duration = 1800;
let currentFrame = 0;
let position = 0;
let frameCount = 0;
let timerLoop = null;

let xPos = 50;
let yPos = window.innerHeight - 150;


const content = document.getElementById("content");
const actBtn = document.getElementById("actBtn");

const imgEle = document.getElementById("charFrame");
const setIcon = document.getElementById("setIcon");
const setCng = document.getElementById("setChange");
const setMenu = document.getElementById("setMenu");

const timeInput = document.getElementById("timeInput");

const finBtn = document.getElementById("fin");
const defaultBtn = document.getElementById("def");

//if timer is not running then menu can appear or disappear based on click
setIcon.onclick = function(){
   if(!timer){
    setMenu.classList.toggle("hidden");
   }
};

setCng.onclick = function(){
    window.location.href = "sketch.html";
}

//enters users input from timer into the timer countdown after clicking done
finBtn.onclick = function(){
    let writeMin = parseInt(timeInput.value, 10);

    if(isNaN(writeMin) || writeMin <= 0){
        timeLeft = 1800;
        duration = 1800;
        timeInput.value = 30;
    }
    else{
        timeLeft = writeMin * 60;
        duration = writeMin * 60;
    }

    display()
    setMenu.classList.add("hidden");
};

//if user clicks default button timer is set to 30 mins
defaultBtn.onclick = function(){
    timeLeft = 1800;
    duration = 1800;
    timeInput.value = 30;
    display();
    setMenu.classList.add("hidden");
};


//timer display
function display(){
let minutes = Math.floor(timeLeft / 60);
let seconds = timeLeft % 60;

//formats countdown
content.textContent = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
}

//initalize character position
imgEle.style.transform = `translate(${xPos}px, ${yPos}px)`;
//display timer
display();

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
        setMenu.classList.add("hidden");
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
        pause();
    }
};

function pause(){
    timer = false;
    clearInterval(timerLoop);
    timerLoop = null;
    actBtn.textContent = "Start Studying";
}

function stop(){
    timer = false;
    clearInterval(timerLoop);
    timerLoop = null;
    actBtn.textContent = "Start Studying";

    timeLeft = duration;
    display();
}

