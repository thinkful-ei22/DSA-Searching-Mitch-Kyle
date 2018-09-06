export default function binarySearch(array, value) {
  let count = 0;
  let response = '';
  response = `The number ${value} is in the array. It took ${count} attempts to search.`;
  response = `The number ${value} is not in the array. It took ${count} attempts to search.`;
  return response;
}