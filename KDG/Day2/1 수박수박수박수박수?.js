function solution(n) {
  let water = "수박";
  let two = water.repeat(n);
  let answer = two.slice(0, n);
  return answer;
}
