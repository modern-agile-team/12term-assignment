function solution(n, lost, reserve) {
    const realLost = lost.filter(x => !reserve.includes(x)).sort((a, b) => a - b);
    const realReserve = reserve.filter(x => !lost.includes(x)).sort((a, b) => a - b);

    for (const res of realReserve) {
        const idx = realLost.findIndex(e => Math.abs(e - res) <= 1);
        if (idx !== -1) {
            realLost.splice(idx, 1)
        }
    }

    return n - realLost.length;
}