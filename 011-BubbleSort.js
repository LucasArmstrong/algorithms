function BubbleSort(array) {
	let sort = true;
	let count = 0;
	while (sort) {
		sort = false;
		for (let i = 0; i < array.length - 1 - count; i++) {
			if (array[i] > array[i+1]) {
				let tmp = array[i];
				array[i] = array[i+1];
				array[i+1] = tmp;
				sort = true;
			}
		}
		count++;
	}
	return array;
}