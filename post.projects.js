// Make sure to import or define Project at the top of your file, e.g.:
// const Project = require('./path/to/project.model');

export const createProjects = async (req, res) => {
    try {
        const owner = re.user._id
        const { name } = req.body;
        if (!name) return res.status(400).json({ message: "Name is required" });

        const project = new Project({ name, owner});
        const saveP = await project.save();

        res.status(201).json({
            status: "success",
            project: saveP
        });
    } catch (error) {
        res.status(500).json({ status: "error", message: "Internal server error" });
    }
}