// find two numbers in given array that add up to targetSum
function twoNumberSum(array, targetSum) {
	array.sort((a, b) => a - b);
	let leftPointer = 0;
	let rightPointer = array.length-1;
	while (leftPointer < rightPointer) {	
		let sum = array[leftPointer] + array[rightPointer]; 
		if (sum === targetSum) {
			return [array[leftPointer], array[rightPointer]];
		} else {
			(sum < targetSum) ? leftPointer++ : rightPointer--;
		}
	}
	return [];
}