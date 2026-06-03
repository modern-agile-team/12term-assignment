function solution(n) {
    
    let s = "수박";
    let result = "";
    
    for (let i = 0; i < n; i++) {
        
        result += s[i % s.length];
    }
    
    return result;
}