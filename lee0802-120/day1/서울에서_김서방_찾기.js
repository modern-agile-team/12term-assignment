function solution(seoul) {
    var result = [];
    let count = 0;

    for (const key of seoul) {
        result.push(key);
    }
    count = result.indexOf("Kim");

    return "김서방은 " + count + "에 있다";
}

console.log(solution(["Jans", "JNNNN", "Kim"]));