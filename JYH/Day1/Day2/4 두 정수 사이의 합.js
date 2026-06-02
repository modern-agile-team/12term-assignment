function solution(a, b) {
    
    let result = 0;
    
    if (a === b) {
        
        return a || b;
    }
    
    else if (a < b) {
        
        for (a; a <= b; a++) {
            
            result += a;
        }
        
        return result;
    }
    
    else if (a > b) {
        
        for (b; b <= a; b++) {
            
            result += b;
        }
        
        return result;
    }
}