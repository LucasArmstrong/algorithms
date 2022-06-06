function mergeLinkedLists(headOne, headTwo) {
  let node1 = headOne;
  let node1Prev = null;
  let node2 = headTwo;
  while (node1 !== null && node2 !== null) {
    if (node1.value < node2.value) {
      node1Prev = node1;
      node1 = node1.next;
    } else {
      if (node1Prev !== null) {
        node1Prev.next = node2;
      }
      node1Prev = node2;
      node2 = node2.next;
      node1Prev.next = node1;
    }
  }
  if (node1 === null) {
    node1Prev.next = node2;
  }
  return headOne.value < headTwo.value ? headOne : headTwo;
}