// find the first non repeating character if one exists
function firstNonRepeatingCharacter(string) {
	let char = {};
	for (let i = 0; i < string.length; i++) {
		if (string.slice(i+1).indexOf(string[i]) === -1 && !char[string[i]]) {
			return i;
		} else {
			char[string[i]] = true;
		}
	}
	
	return -1;
}