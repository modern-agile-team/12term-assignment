/**
 * 0.1 자료형 타입 판별  [기본기: 자료형]
 *
 * 어떤 값이든 받아 그 값의 타입 이름을
 * "number" / "string" / "boolean" / "array" / "object" / "null" / "undefined"
 * 중 하나의 문자열로 반환하세요.
 *
 * @example
 * solution(42) // => "number"
 */
export type TypeName =
  | "number"
  | "string"
  | "boolean"
  | "array"
  | "object"
  | "null"
  | "undefined";

export function solution(value: unknown): TypeName {
  if (Array.isArray(value)) return "array";
  if (value === null) return "null";
  return typeof value as TypeName;
}

