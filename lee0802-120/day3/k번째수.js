// commands를 for문을 돌려 2차원 배열을 하나하나 읽는다.
// slice함수를 사용해서 시작(arr[0] - 1)과 끝(arr[1])을 배정후 sort함수로 오름차순으로 구성하고, 배열[arr[2] - 1]로 하나하나 내보내면 된다.

function solution(array, commands) {
    return commands.map(arr => {
        return array.slice(arr[0] - 1, arr[1]).sort((a, b) => a - b)[arr[2] - 1];
    })
}

