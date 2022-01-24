// validate a BST by returning true or false
function validateBst(tree, min = -Infinity, max = Infinity) {
	if (tree === null) return true;
	if (tree.value < min || tree.value >= max) return false;
	
	return this.validateBst(tree.left, min, tree.value) 
		&& this.validateBst(tree.right, tree.value, max);
}