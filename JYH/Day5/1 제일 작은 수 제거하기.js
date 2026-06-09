function solution(arr) {
    
    if (arr.length < 2) {

        arr.splice(0, 1);
        arr[0] = -1;

        return arr;
    }
    else {
        //배열에서 가장 작은 값의 요소를 찾아 해당 요소 1개 삭제
        arr.splice(arr.indexOf(Math.min(...arr)), 1);

        return arr;
    }
}