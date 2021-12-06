// determine if sequence array is a subsequence of the first array
function isValidSubsequence(array, sequence) {
	var y = 0;
	var num;
	while (num = array.shift()) {
		if (num === sequence[y]) {
			if (y === sequence.length-1) return true;
			y++;
		}
	}
	return false;
}