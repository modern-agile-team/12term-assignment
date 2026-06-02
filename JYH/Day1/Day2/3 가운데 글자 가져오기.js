function solution(s) {
    
    let result = "";
    let pS = 0;
    
    if (s.length % 2 == 0) {
        
        pS = s.length / 2;
        
        result = s[pS-1] + s[pS];
    }
    else if (s.length % 2 == 1) {
        
        pS = Math.floor(s.length / 2);
        
        result = s[pS];
    }
    
    return result;
}