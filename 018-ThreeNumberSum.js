// find triplets that add up to given target sum using pointers
function ThreeNumberSum_pointers(array, targetSum) {
	array.sort((a, b) => a - b);
	const triplets = [];
	for (let i = 0; i < array.length - 2; i++) {
		let left = i + 1;
		let right = array.length - 1;
		while (left < right) {
			let currentSum = array[i] + array[left] + array[right];
			if (currentSum === targetSum) {
				triplets.push([array[i], array[left], array[right]]);
				left++;
				right--;
			} else if (currentSum < targetSum) {
				left++;
			} else if (currentSum > targetSum) {
				right--;
			}
		}
	}
	return triplets;
}

// using 3 for loops
function ThreeNumberSum_3loops(array, targetSum) {
	array.sort((a, b) => a - b);
	const triplets = [];
	const x = array.length;
	for (var i = 0; i < (x - 2); i++) {
		for (var j = i + 1; j < (x - 1); j++) {
			for (var k = j + 1; k < x; k++) {
				if (array[i] + array[j] + array[k] === targetSum) {
					triplets.push([array[i], array[j], array[k]])
				}
			}
		}
	}
	return triplets;
}