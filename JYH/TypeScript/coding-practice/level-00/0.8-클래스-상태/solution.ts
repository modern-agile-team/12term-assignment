/**
 * 0.8 클래스와 상태 (Counter)  [기본기: class]
 *
 * 시작값 start로 초기화되고
 * 아래 Counter 인터페이스를 만족하는 카운터 객체를 반환하세요.
 *
 * @example
 * const c = solution(0);
 * c.increment();
 * c.value() // => 1
 */
export interface Counter {
  increment(): void;
  decrement(): void;
  value(): number;
}

export function solution(start: number): Counter {
  let count = start;

  return {
    increment(): void{
      count++;
    },
    decrement(): void{
      count--;
    },
    value(): number{
      return count;
    },
  };
}
