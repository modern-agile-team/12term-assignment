function solution(N, stages) {

    const result = [];

    for (let stage = 1; stage <= N; stage++) {

        const failCount = stages.filter((userStage) => {
            return userStage === stage;
        }).length;

        const reachCount = stages.filter((userStage) => {
            return userStage >= stage;
        }).length;

        const failRate = reachCount === 0 ? 0 : failCount / reachCount;

        result.push([stage, failRate]);
    }

    result.sort((a, b) => {
        
        if (a[1] === b[1]) return a[0] - b[0];

        return b[1] - a[1];
    })

    return result.map((item) => {
        return item[0];
    })
}