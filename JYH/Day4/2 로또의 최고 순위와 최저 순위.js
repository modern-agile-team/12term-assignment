function solution(lottos, win_nums) {
    
    const matchCount = lottos.filter(num => win_nums.includes(num)).length;   //겹치는 개수
    const zeroCount = lottos.filter(num => num === 0).length;   //0의 개수
    
    const rank = count => Math.min(6, 7 - count);   //등수로 변환
    
    const bestRank = rank(matchCount + zeroCount);   //최고 순위 계산
    const worstRank = rank(matchCount);   //최저 순위 계산
    
    return [bestRank, worstRank];
}