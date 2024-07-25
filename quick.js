// In this exercise, your goal is to implement a function called ***pivot***. This function contains nearly all of the logic you’ll need in order to implement Quick Sort in the next exercise.

// The ***pivot*** function is responsible for taking an array, setting the pivot value, and mutating the array so that all values less than the pivot wind up to the left of it, and all values greater than the pivot wind up to the right of it. It’s also helpful if this helper returns the index of where the pivot value winds up.

// For example, if we decide the pivot will always be the first element in the array, it should behave in the following way:

function pivot(arr, start = 0, end = arr.length - 1) {
    let pivotValue = arr[start];
    let swapIndex = start;

    for (let i = start + 1; i <= end; i++) {
        if (arr[i] < pivotValue) {
            swapIndex++;
            [arr[swapIndex], arr[i]] = [arr[i], arr[swapIndex]];
        }
    }

    [arr[start], arr[swapIndex]] = [arr[swapIndex], arr[start]];
    return swapIndex;
}

module.exports = pivot;

// The next sorting algorithm we’ll consider is Quick Sort. Unfortunately, quicksort is not the most intuitive of algorithms and has a wide range of implementations. It may help to check out this great video from Computerphile for a [quick introduction to how quicksort works](https://www.youtube.com/watch?v=XE4VP_8Y0BU).

// The algorithm is as follows:

// - Pick an element in the array and designate it as the “pivot”. While there are quite a few options for choosing the pivot. We’ll make things simple to start, and will choose the pivot as the first element. This is not an ideal choice, but it makes the algorithm easier to understand for now.
// - Next, compare every other element in the array to the pivot.
// - If it’s less than the pivot value, move it to the left of the pivot.
// - If it’s greater, move it to the right.
// - Once you have finished comparing, the pivot will be in the right place.
// - Next, recursively call quicksort again with the left and right halves from the pivot until the array is sorted.

// It’s easiest to implement Quick Sort with the aid of your pivot  helper from the earlier exercise. This function is responsible for taking an array, setting the pivot value, and mutating the array so that all values less than the pivot wind up to the left of it, and all values greater than the pivot wind up to the right of it. It’s also helpful if this helper returns the index of where the pivot value winds up.

function quickSort(arr, left = 0, right = arr.length - 1) {
    if (left < right) {
        let pivotIndex = pivot(arr, left, right);
        quickSort(arr, left, pivotIndex - 1);
        quickSort(arr, pivotIndex + 1, right);
    }
    return arr;
}

module.exports = quickSort;
