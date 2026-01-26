// to implement GET /projects/:projectId/tasks


export const getTasks = asyncHandler(async (req, res) => {
    const { projectId } = req.params
    const { id: userId, role } = req.params

    const project = await Project.findById(projectId)
    if (!project) res.status(404).json({
        message: "No project found"
    })

    const isOwner = project.ownerId.toString() === userId;
    const isAdmin = req.user.role === "admin";

    if (!isAdmin && !isOwner) res.status(403).json({
        message: "Unauthorized: Access denied"
    })

    const task = await Task.find({
        projectId,
        completed: false
    })


    res.status(200).json({
        data: task
    })
})