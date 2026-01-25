//return failed requests {status >= 400}

const logs = [
    { userId: "u1", endpoint: "/login", status: 200 },
    { userId: "u2", endpoint: "/tasks", status: 500 },
    { userId: "", endpoint: "/tasks", status: 400 },
    { userId: "u3", endpoint: "/login", status: 401 },
    { userId: "u2", endpoint: "/tasks", status: 201 }
];

const failedReq = (logs) => {
    if(!Array.isArray(logs)) return [];

    let res = []
    for (const log of logs) {
        const { userId, endpoint, status } = log
        if (typeof status !== "number") continue;
        if (typeof userId !== "string" || typeof endpoint !== "string") continue;
        if (userId.trim() === "" || endpoint.trim() === "") continue;

        if (status >= 400) res.push({ userId, endpoint, status });
    }

    return res;
}

console.log(failedReq(logs));