function solution(new_id) {
    return new_id
        .replace(/[A-Z]/g, (m) => m.toLowerCase())
        .replace(/[^a-z0-9_.-]/g, "")
        .replace(/\.{2,}/g, ".")
        .replace(/^\.|\.$/g, "")
        .replace(/^$/, "a")
        .replace(/^(.{15}).*$/, "$1")
        .replace(/\.$/, "")
        .replace(/^.{1,2}$/g, (m) => m + m.at(-1).repeat(3 - m.length));
}