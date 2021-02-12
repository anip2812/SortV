async function quickSort(arr, start, end) {
  if (start >= end) {
    return;    
  }  
  let index = await quickSortPartition(arr, start, end);
  states[index] = -1;
 
  await Promise.all([
    quickSort(arr, start, index - 1)    
  ]);
  
  for (let i = start; i <= index; i++) {
    states[i] = -1;
  }
  
  await Promise.all([    
    quickSort(arr, index + 1, end)
  ]);  

  states[end] = -1;
}

async function quickSortPartition(arr, start, end) {
  states[end] = 0;
  for (let i = start; i < end; i++) {
    states[i] = 1;
  }
  
  let pivotIndex = start;
  let pivotValue = arr[end];
  
  for (let i = start; i < end; i++) {
    
    states[i] = 0;
    await sleep(sleepDelay);
    states[i] = 2;

    if (arr[i] < pivotValue) {
      await swap(arr, i, pivotIndex);
      states[pivotIndex] = 3;      
      pivotIndex++;    
    }    
  }  
  states[end] = 2;
  await  swap(arr, pivotIndex, end);
  return pivotIndex;
}

async function mergeSort(arr, start, end) {
  
  if (start >= end) {
    return;    
  }
    
  let mid = Math.floor(start+((end-start) / 2));

  await Promise.all([
    mergeSort(arr, start, mid),
  ]);
  
  await Promise.all([    
    mergeSort(arr, mid + 1, end)
  ]);

  let left = start;
  let right = mid + 1;

  for (let i = start; i <= end; i++) {
    states[i] = 1;
  }

  while (left <= mid && right <= end) {
    states[left] = 0;
    states[right] = 0;
    await sleep(sleepDelay);
    if (arr[right] <= arr[left]) {
        states[left] = -1;
        states[right] = 1;            
        let temp = arr[right];
        arr.splice(right, 1);
        arr.splice(left, 0, temp);
        left ++;        
        right ++;
        mid ++;          
    }
    else {
      states[left] = -1;
      states[right] = 1;
      left ++;  
    }        
  }

  for (let i = left; i <= end; i++) {
      states[i] = -1;
  }
}

async function bubbleSort(arr) {
  for (let i = 0; i < values.length; i++){
    states[i] = 1;
  }
  for (let i = 0; i < arr.length; i++){
    for (let j = 0; j < arr.length-i-1; j++){        
      states[j] = 0;      
      await sleep(sleepDelay);
      if (arr[j] > arr[j+1]) {       
        swap(arr, j, j+1);
      }
      states[j] = 1;
      states[j+1] = -1;
    }
  }
}

async function insertionSort(arr) {

  for (let i = 0; i < values.length; i++){
    states[i] = 1;
  }

  for (let i = 0; i < arr.length; i++) {
    let j = i - 1;
    while (j >= 0) {
      states[j+1] = 0;
      await sleep(sleepDelay);
      states[j] = -1;
      states[j+1] = -1; 
      if (arr[j] > arr[j+1]) {   
        swap(arr, j, j+1);
        j--;
      } else {
        break;
      }                
    }
  }
}

async function selectionSort(arr) {

  for (let i = 0; i < values.length; i++){
    states[i] = 1;
  }

  for (let i = 0; i < arr.length; i++) {        
    let min = i;
    states[min] = 0;
    for (let j = i+1; j < arr.length; j++) {
      states[j] = 0;
      await sleep(sleepDelay);
      if(arr[j] < arr[min]){
        states[min] = 1;
        min = j; 
        states[min] = 0;
      }else{
        states[j] = 1;  
      }
      
    }
    if (min != i) {
      swap(arr, i, min);
    }
    states[min] = 1;  
    states[i] = -1;        
  }
}
