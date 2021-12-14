// build a class for bst construction
//todo: add notes for each case on remove()
class BST {
	constructor(value) {
		this.value = value;
		this.left = null;
		this.right = null;
	}

	insert(value) {
		if (value < this.value) {
			if (this.left === null) {
				this.left = new BST(value);
			} else {
				this.left.insert(value);
			}
		} else {
			if (this.right === null) {
				this.right = new BST(value);
			} else {
				this.right.insert(value);
			}
		}
		return this;
	}

	contains(value) {
		if (value === this.value) return true;
		if (value < this.value) {
			if (this.left === null) {
				return false;
			} else {
				return this.left.contains(value);
			}
		} else {
			if (!this.right) {
				return false;
			}
			if (this.right === null) {
				return false;
			} else {
				return this.right.contains(value);
			}
		}
	}

	remove(value, parent = null) {
		if (value < this.value) { // move left, value is smaller
			if (this.left !== null) {
				this.left.remove(value, this);
			}
		} else if (value > this.value) { // move right, value is greater
			if (this.right !== null) {
				this.right.remove(value, this);
			}
		} else { // value is equal here , what can we assume
			if (this.left !== null && this.right !== null) {
				this.value = this.right.getMinValue();
				this.right.remove(this.value, this);
			} else if (parent === null) {
				if (this.left !== null) {
					this.value = this.left.value;
					this.right = this.left.right;
					this.left = this.left.left;
				} else if (this.right !== null) {
					this.value = this.right.value;
					this.left = this.right.left;
					this.right = this.right.right;
				}
			} else if (parent.left === this) {
				parent.left = this.left !== null ? this.left : this.right;
			} else if (parent.right === this) {
				parent.right = this.left !== null ? this.left : this.right;
			}
		}
		return this;
	}
	
	getMinValue() {
		if (this.left === null) {
			return this.value;
		} else {
			return this.left.getMinValue();
		}
	}
	
}