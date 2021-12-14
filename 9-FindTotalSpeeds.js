// find either the min or max total speeds by pairing speeds from the two given arrays
function totalSpeed(speedsA, speedsB, max) {
	speedsA.sort((a,b) => a-b);
	speedsB.sort((a,b) => max ? b-a : a-b);
	
	let totalSpeed = 0;
	for (let i = 0; i < speedsA.length; i++) {
		totalSpeed += (speedsA[i] >= speedsB[i]) ? speedsA[i] : speedsB[i];
	}
	return totalSpeed;
}