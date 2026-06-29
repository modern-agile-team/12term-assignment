function solution(s){
    const pcount = s.toLowerCase().split('p').length - 1;
    const ycount = s.toLowerCase().split('y').length - 1;
    
    return pcount == ycount;
}

