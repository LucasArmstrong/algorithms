// find the pair of numbers from two arrays that have the closest difference to 0
function SmallestDifference(arrayOne, arrayTwo) {
	arrayOne.sort((a, b) => a - b);
	arrayTwo.sort((a, b) => a - b);
	let firstIndex = 0;
	let secondIndex = 0;
	let currentDiff = Infinity;
	let smallestDiff = Infinity;
	let smallestDiffPair = [];
	while (firstIndex < arrayOne.length && secondIndex < arrayTwo.length) {
		let first = arrayOne[firstIndex];
		let second = arrayTwo[secondIndex];
		if (first === second) {
			return [first, second];
		} else if (first < second) {
			currentDiff = second - first;
			firstIndex++;
		} else if (second < first) {
			currentDiff = first - second;
			secondIndex++;
		}
		if (smallestDiff > currentDiff) {
			smallestDiff = currentDiff;
			smallestDiffPair = [first, second];
		}
	}
	return smallestDiffPair;
}