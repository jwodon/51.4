// Here’s some guidance for how selection sort should work:

// - Assign the first element to be the smallest value (this is called the minimum). It does not matter right now if this actually the smallest value in the array.
// - Compare this item to the next item in the array until you find a smaller number.
// - If a smaller number is found, designate that smaller number to be the new “minimum” and continue until the end of the array.
// - If the “minimum” is not the value (index) you initially began with, swap the two values. You will now see that the beginning of the array is in the correct order (similar to how after the first iteration of bubble sort, we know the rightmost element is in its correct place).
// - Repeat this with the next element until the array is sorted.

// insertionSort([4, 20, 12, 10, 7, 9]); // [4, 7, 9, 10, 12, 20]
// insertionSort([0, -10, 7, 4]); // [-10, 0, 4, 7]
// insertionSort([1, 2, 3]); // [1, 2, 3]
// insertionSort([]);

// let nums = [
//     4, 3, 5, 3, 43, 232, 4, 34, 232, 32, 4, 35, 34, 23, 2,
//     453, 546, 75, 67, 4342, 32
// ];

// insertionSort(nums); // [2, 3, 3, 4, 4, 4, 5, 23, 32, 32, 34,
//                      //  34, 35, 43, 67, 75, 232, 232, 453, 546, 4342]

function selectionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        let minIndex = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[minIndex]) minIndex = j;
        }
        if (minIndex !== i) [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
    }
    return arr;
}

module.exports = selectionSort;
