// using binary search find the index of target number within the sorted array, or return -1 if target doesnt exist
function binarySearch(array, target) {
	let left = 0;
	let right = array.length-1;
	
	while (left <= right) {
		let middle = Math.floor((right + left) / 2);
		if (array[middle] === target) {
			return middle;
		} else if (target < array[middle]) {
			right = middle - 1;
		} else if (target > array[middle]) {
			left = middle + 1;
		}
	}
	
	return -1;
}