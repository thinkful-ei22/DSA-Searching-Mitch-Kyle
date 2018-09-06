export default function binarySearch(array, value) {
  let count = 0;
  
  const search = (array, value) => {
    count++;
    const middleIndex = Math.floor(array.length/2);
    console.log('array: ', array);
    console.log('middle: ', array[middleIndex]);
    const leftArr = array.slice(0, middleIndex);
    const rightArr = array.slice(middleIndex + 1);

    // base case
    if (array[middleIndex] === value) {
      return `The number ${value} is in the array. It took ${count} attempts to search.`;
    }
    // recursive case
    else if (array[middleIndex] < value) {
      return search(rightArr, value);
    }
    else if (array[middleIndex] > value) {
      return search(leftArr, value);
    } else {
      return `The number ${value} is not in the array. It took ${count} attempts to search.`;
    }

  };

  return search(array, value);
}