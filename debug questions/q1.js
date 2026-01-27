//This is an Express controller written by a junior dev.

export const updateUserProfile = async (req, res) => {
    const userId = req.params.id;
    const updates = req.body;

    const user = await User.findById(userId);

    if (!user) {//missing return - logical bug
        res.status(404).json({ message: "User not found" });
    }

    //Security Issue
    //Missing Authzn 🟢

    // No validation on:

    // allowed fields

    // field types

    // empty values

    Object.assign(user, updates); // Security Issue: allows updating any field -> role, username, password

    await user.save();

    res.status(200).json({
        status: "success",
        data: user //this may return password hash, internal fields, tokens, flags
    });
};
