// for문을 사용한 문제풀이
function solution(absolutes, signs) {
    const arr = [];
    let answer = 0;

    for (let i = 0; i < absolutes.length; i++) {
        if (signs[i]) arr.push(absolutes[i])
        else arr.push(-absolutes[i])
    }

    arr.forEach(x => answer += x)

    return answer;
}

// reduce를 사용한 문제 풀이
function solution1(absolutes, signs) {
    return absolutes.map((num, idx) => signs[idx] ? num : -num)
        .reduce((acc, num) => acc + num, 0);
}

// 양수와 음수를 한번에 모아서 더한 후 마지막에 두 값을 합산한다.

// console.log(solution([4,7,12], [true,false,true]))
// console.log(solution([1,2,3], [false,false,true]))

console.log(solution1([4,7,12], [true,false,true]))
console.log(solution1([1,2,3], [false,false,true]))
