function solution(arr) {
    return arr.length <= 1 ? arr.map(x => (x === 10 ? -1 : x)) : arr.filter(e => e !== arr.reduce((v, i) => {
        return v > i ? i : v;
    }));
}

// 순서 설명.
// 1. 먼저 배열길이가 0 ~ 1 이상인지 확인한다
// 2. 만약 배열의 길이가 0 ~ 1 이하라면 해당 배열에 10 있는지 확인후 -1로 치환 후 리턴.
// 3. 만약 배열의 길이가 0 ~ 1 이상이라면 filter로 최소값을 제거 후 리턴.

