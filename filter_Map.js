// return not completed tasks

const tasks = [
    { id: "1", title: "p1", completed: false, priority: "high" },
    { id: "2", title: "p1", completed: true, priority: "low" },
    { id: "3", title: "p2", completed: false, priority: "medium" },
    { id: "4", title: "p1", completed: false, priority: "low" }
];

const notCompleted = (tasks) => {
    if(!Arrray.isArray(tasks)) return []

    let res = []
    for (const task of tasks) {
        const { id, title, completed } = task
        if (typeof id !== "string" || typeof title !== "string") continue
        //removes trailing spaces
        if (id.trim() === " " || title.trim() === " ") continue
        if (completed === false) res.push({ id, title })
    }
    return res;
}

console.log(notCompleted(tasks))