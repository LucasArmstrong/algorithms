// given array of query execution times, output the minimum total waiting time for executing all queries
function minimumWaitingTime(queries) {
	let time = 0;
	if (queries.length <= 1) {
		return time;
	}
	queries.sort((a,b) => a-b);
	
	for (let i = 0; i < queries.length; i++) {
		let elementsRemain = queries.length - (i + 1);
		time += queries[i] * elementsRemain;
	}
	
	return time;
}

/**
// with a reducer 
function minimumWaitingTime(queries) {
	let time = 0;
	if (queries.length <= 1) {
		return time;
	}
	queries.sort((a,b) => a-b);
	
	const reducer = (previousValue, currentValue) => previousValue + currentValue;
	for (let i = 1; i < queries.length; i++) {
		time += queries.slice(0, i).reduce(reducer);
	}
	
	return time;
}

*/
