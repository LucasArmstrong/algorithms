function runLengthEncoding(string) {
	let runChars = [];
	let runLength = 1;
	for (let i = 1; i < string.length; i++) {
		if (string[i] === string[i-1] && runLength < 9) {
			runLength++;
		} else {
			runChars.push(runLength);
			runChars.push(string[i-1]);
			runLength = 1;
		}
	}
	runChars.push(runLength);
	runChars.push(string[string.length-1]);
	return runChars.join('');
}