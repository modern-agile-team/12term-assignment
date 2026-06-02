function solution(numbers) {
    let arr = [];

    for (let i = 0; i < numbers.length; i++) {
        for (let y = i + 1; y < numbers.length; y++) {
            arr.push(numbers[i] + numbers[y]);
        }
    }

    return [...new Set(arr)].sort((a, b) => a - b);
}

console.log(solution([2,1,3,4,1]))
console.log(solution([5,0,2,7]))
