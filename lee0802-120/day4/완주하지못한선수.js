// completion을 반복해서 중복을 구분한다. 문제에서 참가자중에 동명이인이 있을수 있다는 조건에서 completion에도 동명이인이 있을수 있으니 카운트를 해준다.
// 작동 예시 : result["leo"]는 값이 없어서 undefined이기 때문에서 (result[key] || 0)에서 오른쪽이 출력된다. 거기에 + 1로 값을 수정해서 1을 표시하게 한다.
// 예시 2: 만약 completion에 중복 값이 있다면 첫 번째에서 (undefined || 0) + 1에서 이미 값을 수정했기 때문에 key가 똑같은게 들어온다면 (1 || 0) + 1이 된다. 따라서 값을 2로 수정한다.
// completion에 중복이 여러개라면 해당값은 1, 2, 3 이런식으로 증가 될것 이다.

// participant를 반복해서 출력을 정한다. 만약에 result에 [name] key에 있는 값이 undefined라면 !로 false가 되지만 !로 true가 나온다. 따라서 해당값이 출력.
// ex. "leo"으로 예시를 들면 participant에는 "leo"가 있지만 completion에는 해당 값이 없으므로 solution에서 "leo"를 return한다.
// ex2. 1."mislav"를 예시를 들어보자 completion에서는 해당 값이 있어서 false를 출력하고 result[name] -= 1를
// 실행 후 다시 반복, 2."stanko" 또한 있는 값이기 대문에 false -1를 하고 다시 반복, 3."mislav" 에서는 이전에 이미 -1을 하고 해당 값이 0이기 때문에 if에서 true가 되어
// "mislav"를 출력.

function solution(participant, completion) {
    const result = {};

    for (const key of completion) {
        result[key] = (result[key] || 0) + 1;
    }

    for (const name of participant) {
        if (!result[name]) {
            return name;
        }
        result[name] -= 1;
    }

    return result;
}

console.log(solution(["leo", "kiki", "eden"], ["eden", "kiki"]))
console.log(solution(["marina", "josipa", "nikola", "vinko", "filipa"], ["josipa", "filipa", "marina", "nikola"]))
console.log(solution(["mislav", "stanko", "mislav", "ana"], ["stanko", "ana", "mislav"]))