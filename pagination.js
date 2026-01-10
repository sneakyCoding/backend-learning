// “In production I’d wrap this in an async error handler middleware.” {try/catch}

export const getProjects = async (req, res) => {
    const parsedQuery = req.query;
    const ownerId = req.user._id;

    const page = Math.max(1, Number(parsedQuery.page) || 1);
    const limit = Math.min(Math.max(1, Number(parsedQuery.limit) || 10), 50);

    const skip = (page - 1) * limit;

    const projects = await Project.find({ownerId}).sort({createdAt: -1}).skip(skip).limit(limit);

    const total = await Project.countDocuments({ownerId})

    res.status(200).json({
        data: projects,
        pagination: {
            page,
            limit,
            total
        }
    })
}