'use strict'
var shapes = [];
var randomNumm = [];
var iterationShapes = [];
var names = ['bag.jpg', 'banana.jpg', 'bathroom.jpg', 'boots.jpg', 'breakfast.jpg', 'bubblegum.jpg', 'chair.jpg', 'cthulhu.jpg', 'dog-duck.jpg', 'dragon.jpg', 'pen.jpg', 'pet-sweep.jpg', 'scissors.jpg', 'shark.jpg', 'sweep.jpg', 'tauntaun.jpg', 'unicom.jpg', 'usb.jpg', 'water-can.jpg', 'wine-glass.jpg'];
var leftImage = document.querySelector('#leftImage');
var midlleImage = document.querySelector('#middleImage');
var rightImage = document.querySelector('#rightImage');
var imageSection = document.querySelector('#imageSection');
var showingArticle=document.querySelector("#showing");
var totalClicks = 0;
//first way to do this
leftImage.src = `images/${names[0]}.jpg `;
leftImage.alt = names[0];
leftImage.title = names[0];
//second way
midlleImage.setAttribute('src', `images/${names[1]}.jpg`);
midlleImage.setAttribute('alt', names[1]);
midlleImage.setAttribute('title', names[1]);

rightImage.src = `images/${names[2]}.jpg`;
rightImage.alt = names[2];
rightImage.title = names[2];

function Shape(path) {
    var pathArr=path.split('.');
    this.name = pathArr[0];
    //this.ext=pathArr[1];
    this.clicks = 0;
    this.views = 0;
    this.imagePath = `images/${this.name}.${pathArr[1]}`;
    shapes.push(this);
}

for (var i = 0; i < names.length; i++) {
    new Shape(names[i]);
}

var leftShape, middleShape, rightShape;
var previousIndexes=[];


//to get the unique index
function uniqueIndex(){
    var index=randomNumber(0,shapes.length-1);
    //include is a function check if the element includes in the array

    while (previousIndexes.includes(index)) {
//if it is included give me a new random num
        index=randomNumber(0,shapes.length-1);
        
    }
    //if no push it to the array 
    previousIndexes.push(index);
    if(previousIndexes.length>3){
        previousIndexes.shift();

    }
    return index;
}


function render() {

    randomNumm = threeRandomNum(0, shapes.length - 1);

    console.log('randomNumm', randomNumm)
    leftShape = shapes[uniqueIndex()];
    //leftShape=shapes[random];

    console.log('leftShape', leftShape);
    // while(middleShape===leftShape||middleShape===rightShape){}
    middleShape = shapes[uniqueIndex()];
    console.log('middleShape', middleShape);

    rightShape = shapes[uniqueIndex()];
    console.log('rightShape', rightShape);



    leftImage.setAttribute('src', leftShape.imagePath);
    leftImage.setAttribute('alt', leftShape.name);
    leftImage.setAttribute('title', leftShape.name);

    middleImage.setAttribute('src', middleShape.imagePath);
    middleImage.setAttribute('alt', middleShape.name);
    middleImage.setAttribute('title', middleShape.name);


    rightImage.setAttribute('src', rightShape.imagePath);
    rightImage.setAttribute('alt', rightShape.name);
    rightImage.setAttribute('title', rightShape.name);

    //iterationShapes.push(leftShape, middleShape, rightShape);

}
render();


imageSection.addEventListener('click', handleClickOnShape);
/*function handleClickOnShape(event) {
    if(totalClicks<25){
    if (event.target.id !== 'imageSection') {
        if (event.target.id === 'leftImage') {
            leftShape.clicks++;
        }
        else if (event.target.id === 'middleImage') {
            middleShape.clicks++;
        }
        else if (event.target.id == 'rightImage') {
            rightShape.clicks++;
        }
        totalClicks++;
        leftShape.views++;
        middleShape.views++;
        rightShape.views++;
        render();
    }
    for (var totalClicks = 1; totalClicks < 25; totalClicks++) {
        if (event.target.id !== 'imageSection') {
            if (event.target.id === 'leftImage') {
                leftShape.clicks++;
            }
            else if (event.target.id === 'middleImage') {
                middleShape.clicks++;
            }
            else if (event.target.id == 'rightImage') {
                rightShape.clicks++;
            }
            totalClicks++;
            leftShape.views++;
            middleShape.views++;
            rightShape.views++;
            render();
            if (iterationShapes[totalClicks - 1] === iterationShapes[totalClicks]) {

                iterationShapes = [];
                render();
            }
        }
    }}
    console.log('more than 25 clicks');
    imageSection.removeEventListener('click', handleClickOnShape);
    render2();
}*/
var totalClicks = 0;

function handleClickOnShape(event) {
    if (totalClicks < 25) {
        if (event.target.id !== 'imageSection') {
            if (event.target.id === 'leftImage') {
                leftShape.clicks++;
            }
            else if (event.target.id === 'middleImage') {
                middleShape.clicks++;
            }
            else if (event.target.id == 'rightImage') {
                rightShape.clicks++;
            }
            totalClicks++;
            leftShape.views++;
            middleShape.views++;
            rightShape.views++;


            render();
            iterationShapes.push(leftShape, middleShape, rightShape);



        }
    }
    else {
        console.log('more than 25 clicks');
        imageSection.removeEventListener('click', handleClickOnShape);
        render2();

    }

}

function render2() {
    var ulEl = document.getElementById('summary');
    for (var i = 0; i < shapes.length; i++) {
        var liEl = document.createElement('li');
        liEl.textContent = `${shapes[i].name} has ${shapes[i].clicks} clicks and ${shapes[i].views} views `;
        ulEl.appendChild(liEl);
        console.log('my list ', ulEl)


    }


}

function randomNumber(min, max) {

    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function threeRandomNum(min, max) {

    var n = [];

    for (var i = 0; i < 3; i++) {
        n.push(randomNumber(min, max));
    }

    while (n[0] === n[1] || n[0] === n[2] || n[1] === n[2]) {
        n = [];
        for (var i = 0; i < 3; i++) {
            n.push(randomNumber(min, max));
        }


    }




    return n;
}