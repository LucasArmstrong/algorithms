// return the minimum amount of change that cant be created out of an array of coins
function nonConstructibleChange(coins) {
	coins.sort((a, b) => a - b);
	let change = 0;
	for (coin of coins) {
		if (coin > change + 1) {
			return change + 1;
		}
		change += coin;
	}
  return change + 1;
}