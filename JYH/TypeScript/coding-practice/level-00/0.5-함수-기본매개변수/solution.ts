/**
 * 0.5 기본 매개변수 (default parameter)  [기본기: 함수]
 *
 * 이름 name과 인사말 greeting을 받아 "{greeting}, {name}님!" 을 반환하세요.
 * greeting의 기본값은 "안녕하세요"입니다.
 *
 * @example
 * solution("민수") // => "안녕하세요, 민수님!"
 */
export function solution(name: string, greeting: string = "안녕하세요"): string {
  return (greeting + ", " + name + "님!");
}
