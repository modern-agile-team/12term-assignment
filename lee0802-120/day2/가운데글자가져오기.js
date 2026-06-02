// function solution(s) {
//     var str = [];
//     var answer = "";
//
//     for (let i = 0; i < s.length; i++) {
//         str.push(s[i])
//     }
//
//     answer = str.length % 2 === 0
//         ? str.slice(Math.floor(str.length / 2 - 1), Math.floor(str.length / 2 + 1)).join('')
//         : str[Math.floor(str.length / 2)];
//     return answer;
// }

// 축약 버전
function solution(s) {
    return s.length % 2 === 0
        ? s.slice(Math.floor(s.length / 2 - 1), Math.floor(s.length / 2 + 1))
        : s[Math.floor(s.length / 2)];
}

console.log(solution("abcde"));
console.log(solution("qwer"));
