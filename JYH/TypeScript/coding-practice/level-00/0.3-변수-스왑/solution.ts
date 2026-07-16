/**
 * 0.3 변수 스왑  [기본기: 변수]
 *
 * 두 값 a, b를 받아 순서를 바꾼 [b, a]를 반환하세요.
 *
 * @example
 * solution(1, 2) // => [2, 1]
 */
export function solution<T>(a: T, b: T): [T, T] {
  const c = a;
  a = b;
  b = c;
  return [a, b];
}
