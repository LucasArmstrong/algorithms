function SelectionSort(array) {
	let start = 0;
	while (start < array.length - 1) {
		let smallest = start;
		for (let i = start + 1; i < array.length; i++) {
			if (array[i] < array[smallest]) {
				smallest = i;
			}
		}
		let tmp = array[start];
		array[start] = array[smallest];
		array[smallest] = tmp;
		start++;
	}
	return array;
}