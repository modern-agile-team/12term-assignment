/**
 * 0.2 참과 거짓 (truthy / falsy)  [기본기: 자료형, 형변환]
 *
 * 어떤 값이든 받아 그 값이 조건문에서 참(truthy)으로 취급되면 true,
 * 거짓(falsy)으로 취급되면 false를 반환하세요.
 *
 * @example
 * solution("hi") // => true
 * solution(0)    // => false
 */
export function solution(value: unknown): boolean {
  if (value) {
    return true;
  }
  else {
    return false;
  }
}
