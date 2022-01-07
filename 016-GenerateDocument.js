// determine if a document can be created out of characters
function GenerateDocument(characters, document) {
	let docMap = {};

	for (let i = 0; i < document.length; i++) {
		let lastChar = document[i];
		let charMap = {};
		
		if (docMap[document[i]]) {
			docMap[document[i]]++;
		} else {
			docMap[document[i]] = 1;
		}
		
		for (let j = 0; j < characters.length; j++) {
			if (charMap[characters[j]]) {
				charMap[characters[j]]++;
			} else {
				charMap[characters[j]] = 1;
			}
		}
		
		if (!charMap[lastChar] || charMap[lastChar] < docMap[lastChar]) {
			return false;
		}
	}

	return true;
}