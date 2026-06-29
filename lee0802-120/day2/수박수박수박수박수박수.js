function solution(n) {
    var answer = "";
    
    for (let i = 0; i < n; i++) {
        if (i % 2 === 0) answer += "수";
        if (i % 2 === 1) answer += "박";
    }

    return answer;
}

console.log(solution(2))