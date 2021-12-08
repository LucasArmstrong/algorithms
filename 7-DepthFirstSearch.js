// traverse a tree using the Depth-first Search approach (left to right)
class Node {
	constructor(name) {
		this.name = name;
		this.children = [];
	}

	addChild(name) {
		this.children.push(new Node(name));
		return this;
	}

	depthFirstSearch(array) {
		array.push(this.name);
		for (let child of this.children) {
			child.depthFirstSearch(array);
		}
		return array;
	}
}