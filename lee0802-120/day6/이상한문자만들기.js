// 짝수는 대문자, 홀수는 소문자로 변경
// 코드 해석.
// 뭔가 쓰다 보니 복잡하게 되었다. 간단하게 표현을 해보자면
// 1. "try hello world" -> [["try"], ["hello"], ["world"]]
// 2. [["try"], ["hello"], ["world"]] -> [['t','r','y'], ['h','e','l','l','o'], ['w','o','r','l','d']]
// 3. [['t','r','y'], ['h','e','l','l','o'], ['w','o','r','l','d']] -> [['T','r','Y'], ['H','e','L','l','O'], ['W','o','R','l','D']]
// 4. [['T','r','Y'], ['H','e','L','l','O'], ['W','o','R','l','D']] -> [["TrY"], ["HeLlO"], ["WoRlD"]]
// 5. [["TrY"], ["HeLlO"], ["WoRlD"]] -> "TrY HeLlO WoRlD"

function solution(s) {
    return s.split(" ").map(v => {
        return v.split('').map((s, n) => {
            if (n % 2 === 0) return s.toUpperCase()
            else return s.toLowerCase()
        })
    }).map(s => s.join("")).join(" ");
}

