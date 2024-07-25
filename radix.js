// radixSort
// Write a function called radixSort  which accepts an array of numbers and sorts them in ascending order.
// radixSort([8, 6, 1, 12]);
// // [1, 6, 8, 12]

// radixSort([10, 100, 1, 1000, 10000000]);
// // [1, 10, 100, 1000, 10000000]

// radixSort([902, 4, 7, 408, 29, 9637, 1556, 3556, 8157, 4386, 86, 593]);
// // [4, 7, 29, 86, 408, 593, 902, 1556, 3556, 4386, 8157, 9637]

// Radix Sort Helper Functions
function getDigit(num, i) {
    return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}

function digitCount(num) {
    return num === 0 ? 1 : Math.floor(Math.log10(Math.abs(num))) + 1;
}

function mostDigits(nums) {
    let maxDigits = 0;
    for (let i = 0; i < nums.length; i++) {
        maxDigits = Math.max(maxDigits, digitCount(nums[i]));
    }
    return maxDigits;
}

// Radix Sort Implementation
function radixSort(nums) {
    let maxDigitCount = mostDigits(nums);
    for (let k = 0; k < maxDigitCount; k++) {
        let digitBuckets = Array.from({ length: 10 }, () => []);
        for (let i = 0; i < nums.length; i++) {
            let digit = getDigit(nums[i], k);
            digitBuckets[digit].push(nums[i]);
        }
        nums = [].concat(...digitBuckets);
    }
    return nums;
}

module.exports = radixSort;
