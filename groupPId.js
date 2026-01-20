const tasks = [
    { id: "1", projectId: "p1", status: "todo", priority: "high" },
    { id: "2", projectId: "p1", status: "done", priority: "low" },
    { id: "3", projectId: "p2", status: "todo", priority: "medium" },
    { id: "4", projectId: "p1", status: "todo", priority: "low" }
];


const groupPID = (tasks) => {
    let res = {}
    for (let task of tasks) {
        const { id, projectId, status } = task
        if (!id || !projectId) continue
        if (status !== "todo") continue
        if (!res[projectId]) res[projectId] = []
        res[projectId].push(id);
    }

    return res;
}