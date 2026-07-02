function solution(absolutes, signs) {
    
    let count = 0;
    
    for (let i = 0; i < absolutes.length; i++) {
        
        if (signs[i] === true) {
            count += absolutes[i];
        }
        else if (signs[i] === false) {
            count -= absolutes[i]
        }
    }
    
    return count;
}

function solution(absolutes, signs) {
    
    return absolutes.reduce(
        (sum, num, i) => sum + (signs[i]? num : - num ), 0   //참이면 +, 거짓이면 -
    );
}