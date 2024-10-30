// time: O(nlogn)
// space: O(nlogn)
function quicksort(arr) {

  // Check if the input is length 1 or less
    // If so, it's already sorted: return
    if (arr.length <= 1) return arr;

  // Pick the first value as the pivot
  let pivot = arr[0];

  // Orient the pivot so that...
    // every number smaller than the pivot is to the left
    // every number bigger than the pivot is to the left
    let left = [], right = [];

    let index = 1;

    while (index < arr.length) {

      if (arr[index] < pivot) {
        // add to left sub-array
        left.push(arr[index]);
      } else if ( arr[index] > pivot) {
        // add to right sub-array
        right.push(arr[index]);
      }
      index += 1;
    }

  // Recursively sort the left
  let leftSorted = quicksort(left);

  // Recursively sort the right
  let rightSorted = quicksort(right);

  // Return the left, pivot and right in sorted order
  return [...leftSorted, pivot, ...rightSorted];

}

function quickSortInPlace(arr) {

  function sort(left, right) {
    // check if we are out of bound with our index
    if (left >= right) return;

    // get the pivot element
    const pivotIndex = partition(left, right);

    // sort the left part
    sort(left, pivotIndex - 1);

    // sort the right part;
    sort(pivotIndex + 1, right);
  }

  // In-place quicksort:
  // time complexity: O(nlogn) --> worst case O(n^2) when input array is already sorted
  // space complexity: O(1) --> sorted in place;
  function partition(left, right) {
    // choose last item as pivot element
    let pivot = arr[right];

    //pointer to the smaller element / divide between smaller elements and greater elements
    let divider = left - 1;

    //
    for (let i = left; i < right; i++) {
      if (arr[i] < pivot) {
        divider += 1;

        // swap elements with boundary element
        [arr[divider], arr[i]] = [arr[i], arr[divider]];
      }
    }

    // place pivot in the right place
    [arr[divider + 1], arr[right]] = [arr[right], arr[divider + 1]];

    // return pivot index
    return divider + 1;
  }

  // start sorting process
  sort(0, arr.length - 1);
};

let arr = [8, 3, 5, 4, 7]
quickSortInPlace(arr);
console.log("arr after being sorted: ", arr);


module.exports = [quicksort];
