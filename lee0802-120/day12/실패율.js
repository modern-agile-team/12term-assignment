// N = 스테이지 개수, stages[] = 사용자가 멈춰있는 스테이지의 번호, N + 1로 되어있는건 완주했다는 뜻.
function solution(N, stages) {
    const fails = [];

    for (let i = 1; i <= N; i++) {
        const stuck = stages.filter(s => s === i).length;
        const reached = stages.filter(s => s >= i).length;

        const rate = reached === 0 ? 0 : stuck / reached;
        fails.push([i, rate]);
    }

    fails.sort((a, b) => {
        if (b[1] === a[1]) return a[0] - b[0];
        return b[1] - a[1];
    });

    return fails.map(f => f[0]);
}


