function solution(n, arr1, arr2) {
    const allAddArr = arr1.map((v, i) => v | arr2[i]);
    const answer = allAddArr.map(x => x.toString(2));

    answer.forEach((x, i) => answer[i] = x.replace(/1/g, '#'));
    answer.forEach((x, i) => answer[i] = x.replace(/0/g, ' ').padStart(n, ' '));

    return answer;
}

console.log(solution(5, [9, 20, 28, 18, 11], [30, 1, 21, 17, 28]))
console.log(solution(6, [46, 33, 33 ,22, 31, 50], [27 ,56, 19, 14, 14, 10]))