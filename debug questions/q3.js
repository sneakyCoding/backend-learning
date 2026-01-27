// This code is used to reset a user’s password.


/*Password reset flow is fundamentally wrong (DESIGN BUG)
This endpoint is named resetPassword, but:

There is no reset token

No expiration

No email verification

No one-time use logic

In real systems:

Reset uses a token (forgot password)

Change uses old password (authenticated)

This mixes the two concepts dangerously.

*/
export const resetPassword = async (req, res) => {
  const { email, newPassword } = req.body;

  const user = await User.findOne({ email });

  if (!user) {
    res.status(404).json({ message: "User not found" });
  }

  //Security Issue: Missing Authzn, old password verification🟢

  user.password = newPassword;//plain text - hasing should be done and salting and no inpt validation - empty string, non string etc.
  await user.save();

  res.status(200).json({
    message: "Password reset successful"
  });
};
