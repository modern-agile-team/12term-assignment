function solution(s) {
    var answer = "";
    var arrUp = [];
    var arrLo = [];
    
    for (let i = 0; i < s.length; i++) {
        if (s[i] === s[i].toLowerCase()) arrLo.push(s[i]);
        if (s[i] === s[i].toUpperCase()) arrUp.push(s[i]);
    }

    arrUp.reverse();
    arrLo.reverse();
    

    for (let i = 0; i < arrLo.length; i++) {
        answer += arrLo[i];
    }

    for (let i = 0; i < arrUp.length; i++) {
        answer += arrUp[i];
    }

    console.log(arrUp);
    console.log(arrLo);

    return answer;
}

// console.log(solution("Zbcdefg"))
// console.log(solution("QLylbyTvOxoJ"))
console.log(solution("nJBpepMgAmtqxjA"))
// console.log(solution("qrTIIyOuoWjJFlA"))