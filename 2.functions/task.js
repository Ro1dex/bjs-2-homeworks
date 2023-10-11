function getArrayParams(...arr) {

  let min = arr[0];
  let max = arr[0];
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
    if (arr[i] < min) {
      min = arr[i];
    }
    sum += arr[i];
  }

  const avg = (sum / arr.length).toFixed(2);

  return {
    min: Number(min),
    max: Number(max),
    avg: Number(avg)
  };
}

function summElementsWorker(...arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
  sum += arr[i];
  }
  return sum || 0;

}

function differenceMaxMinWorker(...arr) {
  let min = arr[0];
  let max = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  return max - min || 0;

}

function differenceEvenOddWorker(...arr) {
  let sumEven = 0;
  let sumOdd = 0;
  for (let i = 0; i < arr.length; i++) {
  
    if (arr[i] % 2 === 0) {
      sumEven += arr[i];
    }
    else  {
      sumOdd += arr[i];
    }
  }
  return sumEven - sumOdd || 0;

}

function averageEvenElementsWorker(...arr) {
  let sumEven = 0;
  let countEven = 0;
  for (let i = 0; i < arr.length; i++) {
  
    if (arr[i] % 2 === 0) {
      countEven++;
      sumEven += arr[i];
    }
  }
  return Number((sumEven / countEven).toFixed(2)) || 0;
}

function makeWork (arrOfArr, func) {
  let maxWorkerResult = -Infinity;
  
  for (let i = 0; i < arrOfArr.length; i++) {
    const result = func(...arrOfArr[i]);

    if (result > maxWorkerResult) {
      maxWorkerResult = result;
    }
  }

  return maxWorkerResult;

}
