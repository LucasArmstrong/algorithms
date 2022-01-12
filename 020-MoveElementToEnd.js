// move all instances of an integer in given array to the end of the array
// using pointers
function moveElementToEnd(array, toMove) {
	let left = 0;
	let right = array.length - 1;
	while (left < right) {
		while (left < right && array[right] === toMove) {
			right--;
		}
		if (array[left] === toMove) {
			const temp = array[right];
			array[right] = array[left];
			array[left] = temp;
		}
		left++;
	}
	return array;
}

// using sorting
function moveElementToEnd(array, toMove) {
	array.sort((a, b) => {
		if (a === toMove) {
			return 1;
		} else if (b === toMove) {
			return -1;
		}
		return 0;
	});
	return array;
}