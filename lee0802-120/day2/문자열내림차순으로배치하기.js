function solution(s) {
    var answer = "";
    var arrUp = [];
    var arrLo = [];

    for (let i = 0; i < s.length; i++) {
        if (s[i] === s[i].toLowerCase()) arrLo.push(s[i]);
        if (s[i] === s[i].toUpperCase()) arrUp.push(s[i]);
    }

    arrUp.sort(function(a, b) {
        if(a < b) return 1;
        if(a > b) return -1;
        if(a === b) return 0;
    });

    arrLo.sort(function(a, b) {
        if(a < b) return 1;
        if(a > b) return -1;
        if(a === b) return 0;
    });

    for (let i = 0; i < arrLo.length; i++) {
        answer += arrLo[i];
    }

    for (let i = 0; i < arrUp.length; i++) {
        answer += arrUp[i];
    }

    return answer;
}

