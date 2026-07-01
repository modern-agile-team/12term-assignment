function solution(a, b) {
  const start = Math.min(a, b);
  const end = Math.max(a, b);
  const count = end - start + 1;
  const arrays = [...Array(count).keys()].map((num) => start + num);
  const total = arrays.reduce((sum, num) => sum + num, 0);
  return total;
}
