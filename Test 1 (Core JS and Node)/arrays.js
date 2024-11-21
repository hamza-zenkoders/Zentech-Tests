
// Q:01
// Write a function to find the kth smallest element in an unsorted array without sorting the entire array.
// (Hint: Use a variation of the Quickselect algorithm.)

function findPartition(arr, low, high) {
    let pivot = arr[high], pivotloc = low;

    for (let i = low; i <= high; i++) {
        if (arr[i] < pivot) {
            let temp = arr[i];
            arr[i] = arr[pivotloc];
            arr[pivotloc] = temp;
            pivotloc++;
        }
    }

    let temp = arr[high];
    arr[high] = arr[pivotloc];
    arr[pivotloc] = temp;

    return pivotloc;
}

function findKSmallest (arr, low, high, k) {
    let partition = findPartition(arr, low, high);

    if (partition === k-1) return arr[partition];
    else if (partition < k - 1) return findKSmallest(arr, partition + 1, high, k);
    else return findKSmallest(arr, low, partition - 1, k);
}

let array = [ 10, 4, 5, 8, 6, 11, 26];
let k = 3;
let length = array.length;

console.log(findKSmallest([...array], 0, length - 1, k));


// Q:02
// Implement a function that splits an array into chunks of a given size. 
// For example, given [1, 2, 3, 4, 5] and a size of 2, return [[1, 2], [3, 4], [5]]. 
// Ensure the function handles edge cases like empty arrays or chunk sizes larger than the array length.

function splitArrayInChunks (arr, size) {
    let len = arr.length;
    if (!len || size > len) return false;

    let newArr = [], subArr = [];
    for (let i = 0; i < len; i++) {
        subArr.push(arr[i]);
        if ((i+1) % size === 0 || i === (len - 1)) {
            newArr.push([...subArr]);
            subArr = [];
        }
    }

    return newArr;
}

console.log(splitArrayInChunks([1, 2, 3, 4, 5], 2));


// Q:03
// Given an array of integers, write a function that finds the subarray with the maximum sum.
// (Hint: Use Kadane's Algorithm.)

function maxSum (arr) {
    let result = arr[0], max = arr[0];

    for (let i = 1; i < arr.length; i++) {
        max = Math.max(max + arr[i], arr[i])
        result = Math.max(result, max);
    }

    return result;
}

const arr = [2, 3, -8, 7, -1, 2, 3];
console.log(maxSum(arr))


// Q:04
// Create a function that takes an array of integers and returns a new array containing 
// only those elements that have a frequency greater than a given threshold.
// (For example, given [1, 2, 2, 3, 3, 3] and threshold 1, the output should be [2, 3].)

function frequencyGreaterThanThreshold (arr, threshold) {
    let len = arr.length;
    if (!len) return false;

    let newArr = [], curr = 0;
    while (curr < len) {
        if (newArr.includes(arr[curr])) {
            curr++;
            continue;
        }
        let count = 0, flag = false;
        for (let i = 0; i < len; i++) {
            if (arr[curr] === arr[i]) count++;
            if (count > threshold) {
                flag = true;
                break;
            }
        }
        if (flag) {
            newArr.push(arr[curr]);
        }
        curr++;
    }

    return newArr;
}

console.log(frequencyGreaterThanThreshold([1, 2, 2, 3, 3, 3], 1));


// Q:05
// Write a function that rotates an array to the right by k positions. 
// For example, rotating [1, 2, 3, 4, 5] by 2 positions results in [4, 5, 1, 2, 3].

function rotateToRight (arr, k) {
    let len = arr.length;
    if (!len) return false;

    for (let i = 0; i < k; i++) {
        arr.unshift(arr.pop());
    }
  
    return arr;
}

console.log(rotateToRight([1, 2, 3, 4, 5], 2));