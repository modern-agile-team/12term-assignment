function solution(n, arr1, arr2) {
    return arr1.map((v, i) => v | arr2[i])
        .map(x => x
            .toString(2)
            .replace(/1/g, '#')
            .replace(/0/g, ' ')
            .padStart(n, ' ')
        );
}