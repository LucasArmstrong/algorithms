function reverseLinkedList(head) {
  let node = head;
  let previous = null;
  while (node !== null) {
    let next = node.next;
    node.next = previous;
    previous = node;
    node = next;
  }
  return previous;
}