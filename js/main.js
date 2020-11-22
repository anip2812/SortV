let values = [];
let w = 10;
let states = [];
let sleepDelay = 10;

const button = document.querySelectorall('button')
const input = document.querySelectorall('input')


function setup() {
  createCanvas(windowWidth, windowHeight-100);
  values = new Array(floor(width / w));
  for (let i = 0; i < values.length; i++) {
       values[i] = random(height-100) + 100;
       states[i] = -1;
       }
  frameRate(30);  
}

function draw() {
  background(50);
  
  for (let i = 0; i < values.length; i++){
    stroke(0);
    fill(255);
    if (states[i] == 0) { //seagreen
      fill(46,139,87);
    } else if (states[i] == 1) { //darkseagreen
      fill(143,188,143);
    } else if (states[i] == 2) { //grey
      fill(160,160,160);
    } else if (states[i] == 3) { //lightgrey
      fill(200,200,200);
    } else { 
      fill(255);
    }



    rect(i * w, height - values[i], w, values[i]);
  }   
}

function changeWidth(range) {
   w = 110 - range;
   setup();
}

function changeSpeed(range) {   
   sleepDelay = (100-range)*10;   
}










  





 
async function swap(arr, a, b) {
  let temp = arr[a];
  arr[a] = arr[b];
  arr[b] = temp;
  // await sleep(sleepDelay);
  
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}