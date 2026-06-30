// n을 전부 문자열로 바꾸고 예: 12345 -> "12345"
// 문자열을 배열로 하나하나 풀어버린다. 예 : "12345" -> ['1', '2', '3', '4', '5']
// 그리고 그걸 다시 정수형 배열로 변환하고 예 : ['1', '2', '3', '4', '5'] -> [1, 2, 3, 4, 5]
// 정수형으로 되어있는 배열들을 하나하나 더해서 출력한다. [1, 2, 3, 4, 5] -> 15

// 물론 이런것들을 수동으로 할수 있다.

// 복잡버전
function solution1(n) {
    const str = n.toString();
    const array = [];
    let answer = 0;

    for (let i = 0; i < str.length; i++) {
        array[i] = str[i];
    }

    for (let i = 0; i < array.length; i++) {
        array[i] = Number(array[i]);
    }

    for (let i = 0; i < array.length; i++) {
        answer += array[i];
    }

    return answer;
}

// 쉬운버전
function solution(n) {
    return n
        .toString()
        .split('')
        .map(n => Number(n))
        .reduce((a, c) => a + c, 0);
}

// 역시 함수가 최고다

