/**
 * 0.4 함수 기본 (매개변수와 반환값)  [기본기: 함수]
 *
 * 직사각형의 너비 width와 높이 height를 받아
 * 넓이(area)와 둘레(perimeter)를 객체로 반환하세요.
 *
 * @example
 * solution(3, 4) // => { area: 12, perimeter: 14 }
 */
export interface RectangleInfo {
  area: number;
  perimeter: number;
}

export function solution(width: number, height: number): RectangleInfo {
  return {
    area: width * height,
    perimeter: 2 * (width + height),
  };
}
