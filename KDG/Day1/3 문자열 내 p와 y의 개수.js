function solution(s) {
  let pp = s.split("p").length - 1;
  let yy = s.split("y").length - 1;
  let PP = s.split("P").length - 1;
  let YY = s.split("Y").length - 1;
  let pP = pp + PP;
  let yY = yy + YY;
  return pP === yY ? true : false;

  return;
}
