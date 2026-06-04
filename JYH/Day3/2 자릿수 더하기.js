function solution(n) {
    
    let sum = 0;
    
    for (let i = 0; i < String(n).length; i++) {   //숫자를 문자열로 변환하여 자릿수 만큼 반복
        
        sum += Number(String(n)[i]);   //현재 자릿수를 숫자로 변환하혀 누적
    }
    
    return sum;
}

   //------------------------------------------------------------

   //reduce() 메서드 사용
function solution(n) {

    return String(n)
        .split("")   //reduce()를 사용하기 위해 배열 형태로 변환
            .reduce((sum, digit) => sum + Number(digit), 0);   //문자열 배열을 숫자 타입으로 변환 후 누적 합 계산
}