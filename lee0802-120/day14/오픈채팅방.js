function solution(record) {
    let user = [];
    const answer = [];

    // 1번째 값을 정리해서 배열에 주입.
    record.map(x => x.split(' ')).forEach(v => {
        if (v[0] === "Enter") {
            user.push({userId: v[1], nickName: v[2]});
        } else if (v[0] === "Leave") {
            user.push({userId: v[1], Leave: true});
        } else if (v[0] === "Change") {
            user.push({userId: v[1], changeName: v[2]});
        }
    });

    // 2번째 닉네임을 변경을 처리한다.
    user.forEach((x, idx) => {
        let target
        // user = user.filter(u => !('changeName' in u));
    })

    // console.log(user);

    return answer;
}

console.log(solution(["Enter uid1234 Muzi", "Enter uid4567 Prodo","Leave uid1234","Enter uid1234 Prodo","Change uid4567 Ryan"]))