function solution(participant, completion) {
    
    //오름차순 정렬
    participant.sort();
    completion.sort();
    
    for (let i = 0; i < participant.length; i++) {
        if (participant[i] !== completion[i]) {   //값이 다르면 완주하지 못한 사람
            return String(participant[i]);   
        }
    }
}