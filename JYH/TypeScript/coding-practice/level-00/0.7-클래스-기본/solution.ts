/**
 * 0.7 클래스 기본 (생성자와 메서드)  [기본기: class]
 *
 * 너비 width와 높이 height를 받아
 * 아래 Rectangle 인터페이스를 만족하는 객체(인스턴스)를 반환하세요.
 *
 * @example
 * const r = solution(3, 4);
 * r.area() // => 12
 */
export interface Rectangle {
  width: number;
  height: number;
  area(): number;
}

export function solution(width: number, height: number): Rectangle {
  return {
    width: width,
    height: height,
    area() {
      return width * height;
    },
  };
}
