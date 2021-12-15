function InsertionSort(array) {
	let current = 0;
	while (current < array.length) {
		let right = current+1;
		while (array[right-1] > array[right]) {
			let tmp = array[right-1];
			array[right-1] = array[right];
			array[right] = tmp;
			right--;
		}
		current++;
	}
	return array;
}