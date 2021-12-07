//find the closest value to target value thats contained in a Binary Search Tree
function findClosestValueInBst(tree, target, closest = Infinity) {
	if (tree.value == target) {
		return tree.value;
	}
	
	if (Math.abs(tree.value - target) < Math.abs(closest - target)) {
		closest = tree.value;
	}
	
	if (target < tree.value) {
		if (!tree.left) {
			return closest;
		}
		return findClosestValueInBst(tree.left, target, closest);
	} else {
		if (!tree.right) {
			return closest;
		}
		return findClosestValueInBst(tree.right, target, closest);
	}
}