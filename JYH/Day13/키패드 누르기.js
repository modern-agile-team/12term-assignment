function solution(numbers, hand) {
    let result = "";

    const leftKey = [1, 4, 7];
    const rightKey = [3, 6, 9];
    
    let leftPos = "*";
    let rightPos = "#";

    const position = {
        1: [0, 3], 2: [1, 3], 3: [2, 3],
        4: [0, 2], 5: [1, 2], 6: [2, 2],
        7: [0, 1], 8: [1, 1], 9: [2, 1],
        "*": [0, 0], 0: [1, 0], "#": [2, 0]
    };
    
    function getDistance(from, to) {
        const [x1, y1] = position[from];
        const [x2, y2] = position[to];

        return Math.abs(x1 - x2) + Math.abs(y1 - y2);
    }

    numbers.forEach((number) => {
        if (leftKey.includes(number)) {
            result += "L";
            leftPos = number;
        }
        else if (rightKey.includes(number)) {
            result += "R";
            rightPos = number;
        }
        else {
            const leftDistance = getDistance(leftPos, number);
            const rightDistance = getDistance(rightPos, number);
            
            const leftHand = 
                leftDistance < rightDistance ||
                (leftDistance === rightDistance && hand === "left");

            result += leftHand ? "L" : "R";

            if (leftHand) leftPos = number;
            else rightPos = number;
        }
    });
    return result;
}