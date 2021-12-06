// return a sorted array of the squared values of initial array
function sortedSquaredArray(array) {
	let sqrt = new Array(array.length).fill(0);
	let start = 0;
	let end = array.length - 1;
	for (let i = array.length - 1; i >= 0; i--) {
		let absStart = Math.abs(array[start]);
		let absEnd = Math.abs(array[end]);
		if (absEnd > absStart) {
			sqrt[i] = absEnd * absEnd;
			end--;
		} else {
			sqrt[i] = absStart * absStart;
			start++;
		}
	}
  return sqrt;
}