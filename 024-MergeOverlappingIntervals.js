function mergeOverlappingIntervals(intervals) {
  const sorted = intervals.sort((a,b) => a[0] - b[0]);

  const merged = [];
  let current = sorted[0];
  merged.push(current);

  for (const next of sorted) {
    const [_, currentEnd] = current;
    const [nextStart, nextEnd] = next;

    if (currentEnd >= nextStart) {
      current[1] = Math.max(currentEnd, nextEnd);
    } else {
      current = next;
      merged.push(current);
    }
  }

  return merged;
}