function solution(record) {
    const result = [];
    const users = {};

    record.forEach((log) => {
        if (log.includes("Enter")) {
            const parts = log.split(" ");
            users[parts[1]] = parts[2];
        }
        else if (log.includes("Change")) {
            const parts = log.split(" ");
            users[parts[1]] = parts[2];
        }
    });

    record.forEach((log) => {
        if (log.includes("Enter")) {
            const parts = log.split(" ");
            result.push(
                users[parts[1]] + "님이 들어왔습니다."
            );
        }
        else if (log.includes("Leave")){
            const parts = log.split(" ");
            result.push(
                users[parts[1]] + "님이 나갔습니다."
            );
        }
    });
    
    return result;
}