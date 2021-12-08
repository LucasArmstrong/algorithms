// determine if sequence array is a subsequence of the first array
function isValidSubsequence(array, sequence) {
	let leftPointer = 0;
	let elementToCompare = array.shift();
	while (elementToCompare) {
		if (elementToCompare === sequence[leftPointer]) {
			if (leftPointer === sequence.length-1) return true;
			leftPointer++;
		}
		elementToCompare = array.shift();
	}
	return false;
}