function solution(s) {
    
    let index = 0;   //현재 단어에서 몇번째 글자인지 저장
    
    //문자열로 변환 
    return s.split("").map((char) => {
        
        //공백이면 인덱스 초기화
        if (char === " ") {
            index = 0;
            return char;
        }
        
        //짝수 인덱스 대문자, 홀수 인덱스 소문자
        return index++ % 2 === 0
            ? char.toUpperCase()
            : char.toLowerCase();

    }).join("");   //다시 문자열로 전환
}