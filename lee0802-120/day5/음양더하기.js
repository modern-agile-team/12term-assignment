function solution(absolutes, signs) {
    let answer = 0;

    absolutes.map((x, i) => signs[i] ? x : -x).forEach(x => {
        answer += x;
    });

    return answer;
}

// 양수와 음수를 한번에 모아서 더한 후 마지막에 두 값을 합산한다.

console.log(solution([4,7,12], [true,false,true]))
console.log(solution([1,2,3], [false,false,true]))
