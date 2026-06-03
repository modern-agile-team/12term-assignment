function solution(n) {
    
    let text = "수박";
    let result = "";
    
    for (let i = 0; i < n; i++) {
        
        result += text[i % text.length];
    }
    
    return result;
}