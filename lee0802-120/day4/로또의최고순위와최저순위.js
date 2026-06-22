// 등수에 따른 최고 등수, 최저등수를 생각.
// 알수없는 번호 0이 만약에 전부 맞았거나, 전부 틀렸거나를 가정해서 등수를 판별
function solution(lottos, win_nums) {
    const getRank = (count) => (count > 1 ? 7 - count : 6); // 1과 0은 6등이기에 여기서 false가 나면 자동으로 6으로 반환. 다머지는 7 - 하여 반환.
    const matchCount = lottos.filter((n) => win_nums.includes(n)).length;
    const zeroCount = lottos.filter(n => n === 0).length;



    return [getRank(matchCount + zeroCount), getRank(matchCount)]; // 맞춘개수와 0번 개수를 합하여 등수 계산. 최저등수는 맞춘개수만 넣고 계산.
}

console.log(solution([44, 1, 0, 0, 31, 25], [31, 10, 45, 1, 6, 19]))
console.log(solution([0, 0, 0, 0, 0, 0], [38, 19, 20, 40, 15, 25]))
console.log(solution([45, 4, 35, 20, 3, 9], [20, 9, 3, 45, 4, 35]))
