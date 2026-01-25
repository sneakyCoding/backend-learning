//group by user Id 

const events = [
    { userId: "u1", action: "login" },
    { userId: "u2", action: "create_task" },
    { userId: "u1", action: "logout" },
    { userId: "u2", action: "delete_task" },
    { userId: "", action: "login" }
];


const grpById = (events) => {
    if (!Array.isArray(events)) return {};

    let res = {};
    for (const event of events) {
        const { userId, action } = event;

        if (typeof userId !== "string" || typeof action !== "string") continue;
        if (userId.trim() === "" || action.trim() === "") continue;

        if (!res[userId]) {
            res[userId] = [];
        }

        res[userId].push(action);
    }

    return res;
}

console.log(grpById(events));