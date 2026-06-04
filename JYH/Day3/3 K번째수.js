function solution(array, commands) {

    let resultArr = [];   //결과물 저장 배열

    for (let ii = 0; ii < commands.length; ii++) {

        let i = commands[ii][0]; 
        let j = commands[ii][1];
        let k = commands[ii][2];   //i, j, k

        let copy = array.slice();   //원본 보호를 위해 복사본 생성

        copy = copy.slice(i - 1, j);   //i 부터 j 까지

        copy.sort((a, b) => a - b);   //오름차순 정렬

        resultArr.push(copy[k - 1]);   //k번째 숫자를 결과물에 저장
    }
    
    return resultArr;
}