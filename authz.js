const getUserById = async (req, res) => {
  const { id: requestedUserId } = req.params; // this was wrong
  const { id: currentUserId, role } = req.user;

// always use && and use a little brain
  if (role !== "admin" && currentUserId !== requestedUserId) {
    return res.status(403).json({ //always you res not throw r return
      message: "Forbidden"
    });
  }

  const user = await User.findById(requestedUserId);

  if (!user) {
    return res.status(404).json({
      message: "User not found"
    });
  }

  res.status(200).json({
    data: user
  });
};
