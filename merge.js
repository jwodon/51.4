//Given two sorted arrays, write a function called merge which accepts two *sorted* arrays and returns a new array with values from both arrays sorted.

//This function should run in O(n + m) time and O(n + m) space and should not modify the parameters passed to it.

//Also, do not use the built in ***.sort()*** method! We’re going to use this function to implement a sort, so the helper itself shouldn’t depend on a sort.

function merge(arr1, arr2) {
    let result = [];
    let i = 0;
    let j = 0;
  
    while (i < arr1.length && j < arr2.length) {
      if (arr1[i] < arr2[j]) {
        result.push(arr1[i]);
        i++;
      } else {
        result.push(arr2[j]);
        j++;
      }
    }
  
    // If there are remaining elements in arr1 or arr2, add them
    while (i < arr1.length) {
      result.push(arr1[i]);
      i++;
    }
    while (j < arr2.length) {
      result.push(arr2[j]);
      j++;
    }
  
    return result;
  }
  


  function mergeSort(arr) {
    if (arr.length <= 1) return arr;
  
    let mid = Math.floor(arr.length / 2);
    let left = mergeSort(arr.slice(0, mid));
    let right = mergeSort(arr.slice(mid));
  
    return merge(left, right);
  }
  
  
module.exports = { merge, mergeSort};