function solution(s) {
    
    if (s.length !== 4 && s.length !== 6) {   //s의 길이가 4도 아니고 6도 아니면 false
        
        return false;
    }
    
    for (let i = 0; i < s.length; i++) {
        
        if (s[i] < "0" || s[i] > "9") {   //현재 문자가 숫자가 아니면 false (js 는 문자코드 비교 가능)
            
            return false;
        }
    }
    
    return true;
    
}

   //------------------------------------------------------------
   

    //정규식으로 풀이
function solution(s) {

    if (!/^([0-9]{4}|[0-9]{6})$/.test(s)) {   //숫자 4자리 또는 숫자 6자리가 아니면 false

        return false;
    }

    return true;
}