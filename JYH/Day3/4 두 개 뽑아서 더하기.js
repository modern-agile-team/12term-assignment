function solution(numbers) {
    
    let arr = new Array();   //더한 수를 저장 할 배열
    
    for (let i = 0; i < numbers.length; i++) {
        
        for (let j = 0; j < numbers.length; j++) {
            
            if (i === j) {   //같은 수는 더하지 않고 넘김
                
                continue;
            }
            
            else {
                
                arr.push((numbers[i]) + (numbers[j]))   //서로 다른 수는 더하고 배열에 저장
            }
        }
    }
    
    
    for (let i = 0; i < arr.length; i++) {
        
        for (let j = i + 1; j < arr.length;) {   //현재값 이후 요소들 비교
            
            let sameNum = arr[i]   //기준 값 저장
            
            if (i === j) {
                
                continue;
            }
            
            else if (sameNum === arr[j]) {   //중복값 제거   *삭제 하면 배열이 한 칸 앞당겨짐*
                
                arr.splice(j, 1);
                
            } else {
                
                j++;   //중복이 아니면 다음 요소 비교
            }
        }
    }
    
    return arr.sort((a, b) => a - b);   //오름차순 정렬 후 반환
}