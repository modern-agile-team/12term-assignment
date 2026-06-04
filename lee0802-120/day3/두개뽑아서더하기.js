function solution(numbers) {
    const arr = [];

    // for문으로 문자들을 일일이 하나하나 더한다.
    for (let i = 0; i < numbers.length; i++) {
        for (let y = i + 1; y < numbers.length; y++) {
            arr.push(numbers[i] + numbers[y]);
        }
    }

    // Set함수로 중복을 제거후 sort함수로 오름차순으로 정렬후 return한다.
    return [...new Set(arr)].sort((a, b) => a - b);
}

console.log(solution([2,1,3,4,1]))
console.log(solution([5,0,2,7]))
