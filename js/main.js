let values = [];      //panjang array
let w = 10;           //pembagi lebar dimensi layar
let states = [];      //warna
let sleepDelay = 10;  //delay



function setup() {
  
  //mendefinisikan dimensi window
  createCanvas(windowWidth, windowHeight-150);
  
  //membuat array data
  values = new Array(floor(width / w));
  
  //pembuatan array
  for (let i = 0; i < values.length; i++) {
       values[i] = random(height-50) + 50;
       states[i] = -1;
       }
  frameRate(30);  
}

function draw() {
  
  //fill background menjadi abu-abu tua  
  background(50);
  
  //fill seluruh array menjadi warna putih
  for (let i = 0; i < values.length; i++){
    stroke(0);
    fill(255);

    //mendeklarasi pewarnaan
    if (states[i] == 0) { 
      fill(46,139,87); //darkseagreen
    } else if (states[i] == 1) { 
      fill(143,188,143); //seagreen
    } else if (states[i] == 2) { 
      fill(160,160,160); //grey
    } else if (states[i] == 3) { 
      fill(200,200,200); //lightgrey
    } else { 
      fill(255); //white
    }

    //menggambar diagram batang menggunakan rect
    rect(i * w, height - values[i], w, values[i]);
  }   
}

function changeWidth(range) {
   w = 110 - range; //persamaan untuk mengatur ukuran array
   setup();
}

function changeSpeed(range) {   
   sleepDelay = (100-range)*10; //persamaan untuk kecepatan pengurutan 
}
 
async function swap(arr, a, b) {
  
  //menukar nilai index a dan index b pada array
  let temp = arr[a];
  arr[a] = arr[b];
  arr[b] = temp;
}

function sleep(ms) {

  //untuk memberikan delay
  return new Promise(resolve => setTimeout(resolve, ms));
}