function solution(record) {
    const nicknames = {}
    const logs = []
    const answer = []

    for (const r of record) {
        const [input, id, name] = r.split(' ')
        if (input === "Enter" || input === "Change") {
            nicknames[id] = name
        }
    }

    for (const r of record) {
        const [input, id] = r.split(' ')
        if (input === "Enter" || input === "Leave") {
            logs.push([input, id])
        }
    }

    for (const [input, id] of logs) {
        input === "Enter"
            ? answer.push(`${nicknames[id]}님이 들어왔습니다.`)
            : answer.push(`${nicknames[id]}님이 나갔습니다.`)
    }

    return answer;
}

