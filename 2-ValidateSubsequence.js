// determine if sequence array is a subsequence of the first array
function isValidSubsequence(array, sequence) {
	var y = 0;
	var s = [];
	var num;
	while (num = array.shift()) {
		if (num === sequence[y]) {
			s.push(num);
			if (y === sequence.length-1) return true;
			y++;
		}
	}
	return false;
}