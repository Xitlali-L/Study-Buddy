//link function to html interactive device (button with an arrow key)

const charCatergories = {
    hats:{
        images: [
            "images/hat1.png",
            "images/hat2.png"
        ],
        index: 0,
        element: document.getElementById("hats"),
        nextBtn: "0nextBtn",
        prevBtn: "0prevBtn",
    },

    tops:{
        images: [
            "images/top1.png",
            "images/top2.png"
        ],
        index: 0,
        element: document.getElementById("tops"),
        nextBtn: "1nextBtn",
        prevBtn: "1prevBtn",
    },

    bottoms:{
        images: [
            "images/pants1.png",
            "images/pant2.png"
        ],
        index: 0,
        element: document.getElementById("bottoms"),
        nextBtn: "2nextBtn",
        prevBtn: "2prevBtn",
    },

    players:{
        images: [
            "images/playerModel.png"
        ],
        index: 0,
        element: document.getElementById("players"),
        nextBtn: "3nextBtn",
        prevBtn: "3prevBtn",
    },

};

//update the images
function updateImg (newImg) {
    const catergory = charCatergories[newImg];
    catergory.element.src = catergory.images[catergory.index];
}

//Workings of the buttons - switch back anf forth
function buttonMovement() {
    for (const newImg in charCatergories){
        const catergory = charCatergories[newImg];
        document.getElementById(catergory.nextBtn).addEventListener("click", () => {
            catergory.index = (catergory.index - 1 +catergory.images.length) % catergory.images.length;
            updateImg(newImg);
        });
    }
}

//Randomizing the images
function randomImg(){
    for(const newImg in charCatergories) {
        const catergory = charCatergories[newImg];
        catergory.index = Math.floor(Math.random()*catergory.iamges.length);
        updateImg(newImg);
    }
}

document.getElementById("random-btn").addEventListener("click", randomImg);

//setting up the intial images and buttons setup
for(const newImg in charCatergories){
    updateImg(newImg);
}

buttonMovement();