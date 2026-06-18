function solution(n, arr1, arr2) {
    const resultArr1 = [];
    const resultArr2 = [];

    arr1.forEach((num) => {
        let result = "";
        while (num > 0) {
            result = (num % 2) + result;
            num = Math.floor(num / 2);
        }
        resultArr1.push(
            result
                .padStart(n, "0")
                .replace(/1/g, "#")
                .replace(/0/g, " ")
        );
    });
    
    arr2.forEach((num) => {
        let result = "";
        while (num > 0) {
            result = (num % 2) + result;
            num = Math.floor(num / 2);
        }
        resultArr2.push(
            result
                .padStart(n, "0")
                .replace(/1/g, "#")
                .replace(/0/g, " ")
        );
    });
    
    return resultArr1.map((row, i) => {
        let line = "";
        row.split("").forEach((char, j) => {
            line += (
                char === " " &&
                resultArr2[i][j] === " "
            ) ? " " : "#";
        });
        return line;
    });
    
}

//.map() 활용
function solution(n, arr1, arr2) {
    return arr1.map((num, i) => 
        (num | arr2[i])   //하나라도 1 이면 결과 1
            .toString(2)   //2진수 문자열로 변환
            .padStart(n, "0")   //길이가 n, 나머지 0 으로 채움
            .replace(/1/g, "#")   //1이면 #
            .replace(/0/g, " ")   //0이면 공백
    );
}