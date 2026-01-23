// implementing POST /tasks

/*
1 - get project id, body 
2 - verify body after getting the project and verify if project exists
3 - verify role and permission of user 
4 - create task in that project and save it 
5 - respond with a success message and data created
 */

export const createTasks = asyncHandler(async (req, res) => {
    const { projectId } = req.params

    const { title, dueDate } = req.body
    if (!title || typeof title !== "string" || title.trim() === "") return res.status(400).json({ message: "Title is required" });

    const project = await Project.findById(projectId)
    if (!project) return res.status(404).json({ message: "Project not found" });

    const isOwner = project.ownerId.toString() === req.user.id;
    const isAdmin = req.user.role === "admin";

    if (!isAdmin && !isOwner) {
        return res.status(403).json({ message: "Forbidden" });
    }

    const task = new Task({ title, dueDate });
    const saveT = await task.save()

    res.status(201).json({
        status: "success",
        data: task
    })
})