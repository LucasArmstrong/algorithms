// determine if an array of integers is monotonic
function isMonotonic(array) {
	let increasing = (array[0] <= array[array.length-1]);
	for (let i = 0; i < array.length - 1; i++) {
		if (increasing) {
			if (array[i] > array[i+1]) {
				return false;
			}
		} else if (array[i] < array[i+1]) {
				return false;
		}
	}
	return true;
}