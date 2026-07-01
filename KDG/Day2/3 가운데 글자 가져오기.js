function solution(s) {
  const div = Math.floor(s.length / 2);
  if (s.length % 2 === 0) {
    return s.slice(div - 1, div + 1);
  } else {
    return s.slice(div, div + 1);
  }

  let text = s[div];
  return sum;
}
