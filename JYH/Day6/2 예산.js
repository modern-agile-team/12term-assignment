function solution(d, budget) {
    
    let total = 0;   //현재까지 사용한 예산
    
    return d.sort((a, b) => a - b)   //d 오름차순 정렬
            //예산 내 항목만 선택
            .filter(num => (total += num) <= budget).length;
}