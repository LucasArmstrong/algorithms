function getPermutations(array) {
  const perms = [];
  permHelper(array, [], perms);
  return perms;
}

function permHelper(array, currentPerm, perms) {
  if (!array.length && currentPerm.length) {
    perms.push(currentPerm);
  } else {
    for (let i = 0; i < array.length; i++) {
      const newArray = array.slice(0, i).concat(array.slice(i + 1));
      const newPerm = currentPerm.concat([array[i]]);
      permHelper(newArray, newPerm, perms);
    }
  }
}