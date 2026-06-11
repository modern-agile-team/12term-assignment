function solution(n, lost, reserve) {
   
    //오름차순 정렬
    lost.sort((a, b) => a - b);
    reserve.sort((a, b) => a - b);
    
    //lost 중 reserve 에 없는 번호
    const realLost = lost.filter(student => !reserve.includes(student));
    //reserve 중 lost 에 없는 번호
    const realReserve = reserve.filter(student => !lost.includes(student));
    
    //빌린 수
    let borrowCount = 0;

    for (const student of realLost) {
        //앞번호 학생 찾기
        const front = realReserve.indexOf(student - 1);
        //뒷번호 학생 찾기
        const back = realReserve.indexOf(student + 1);

        //앞번호 학생이 있다면
        if (front !== -1) {
            realReserve.splice(front, 1);
            borrowCount++;
        //앞번호 학생이 없다면
        } else if (back !== -1) {
            realReserve.splice(back, 1);
            borrowCount++;
        }
    }
    //전체 학생 수 - 빌리지 못한 학생 수 + 빌린 학생 수
    return n - realLost.length + borrowCount;
}