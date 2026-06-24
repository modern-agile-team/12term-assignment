function solution(s) {
    const result = [];
    const arr = s
        .slice(2, -2)
        .split("},{")
        .map(v => v.split(",").map(Number))
        .sort((a, b) => a.length - b.length);

    arr.forEach((set) => {
        set.forEach((num) => {
            if (!result.includes(num)) {
                result.push(num);
            }
        })
    });
    
    return result;
}