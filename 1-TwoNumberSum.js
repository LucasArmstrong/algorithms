// find two numbers in given array that add up to targetSum
function twoNumberSum(array, targetSum) {
	array.sort((a, b) => a - b);
	let l = 0;
	let r = array.length-1;
	while (l < r) {	
		let sum = array[l] + array[r]; 
		if (sum === targetSum) {
			return [array[l], array[r]];
		} else {
			(sum < targetSum) ? l++ : r--;
		}
	}
	return [];
}