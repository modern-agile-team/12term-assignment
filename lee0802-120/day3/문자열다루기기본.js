// 4 ~ 6까지 숫자로만 구성되어있는지 확인.
// 코드 해석 : 먼저 문자열의 길이가 4 또는 6이면 해당 s를 배열로 풀어서 하나하나 True 아니면 false로 구분한다. 그후 배열중 false가 하나라도 있으면 전체를 false로 본다.

// "0x1f"
// "0hello"
// "1234"

// [ '0', 'x', '1', 'f' ]
// [ '0', 'h', 'e', 'l', 'l', 'o' ]
// [ '1', '2', '3', '4' ]

// [ true, false, true, false ] 해당 배열에 false가 있어 => false
// [ true, false, false, false, false, false ] 해당 배열에 false가 있어 => false
// [ true, true, true, true ] 배열에 false가 없으므로 => true

// 주의점. Number 함수의 문제점 "0x1f" 이런식의 문자열을 주면 해당 문자열을 16진법으로 인식해서 숫자로 인식해 True를 출력하는 문제가 있음.
// 해결법. 문자열을 배열로 풀어서 하나하나 비교하는 방식으로 해결.

function solution(s) {
    return (s.length === 4 || s.length === 6)
        && s.split('').map(str => !isNaN(Number(str))).every(e => e);
}

console.log(solution("0x1f")); // false
console.log(solution("0hello")); // false
console.log(solution("1234")); // true
