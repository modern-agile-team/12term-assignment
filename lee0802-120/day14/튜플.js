// 문제 해설: 문자열에서 작은 객체를 확인하고 거기서 추가된 숫자를 배열에 담아서 리턴하는 문제.
function solution(s) {
    const result = s.match(/\{[^}]+\}/g)
        .map(s => s.replace(/[{}]/g, "").split(',').map(Number)).sort((a, b) => a.length - b.length);
    let answer = [];

    for (let i = 0; i < result.length; i++) {
        let as1 = result[i - 1];
        let as2 = result[i];

        answer.push(as2.filter(x => {
            if (as1 === undefined) {
                return as2[i];
            }
            return !as1.includes(x)
        }).join());
    }

    return answer.map(Number);
}

