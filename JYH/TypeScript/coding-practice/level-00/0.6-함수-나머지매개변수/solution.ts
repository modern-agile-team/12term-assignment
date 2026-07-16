/**
 * 0.6 나머지 매개변수 (rest parameter)  [기본기: 함수]
 *
 * 임의의 개수의 숫자를 받아 모두 더한 합을 반환하세요.
 *
 * @example
 * solution(1, 2, 3) // => 6
 */
export function solution(...numbers: number[]): number {
  let sum: number = 0;
  numbers.forEach((num) => {
    sum += num;
  });
  return sum;
}
