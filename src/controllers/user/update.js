const { isAuthorized } = require("../../utils/auth-utils");

const updateUser = async (req, res) => {
  const {
    session,
    db: { User },
    params: { id },
    body: { first_name, last_name, username, email },
  } = req;

  if (!isAuthorized(id, session)) return res.sendStatus(403);

  const user = await User.find(id);
  if (!user) return res.sendStatus(404);

  const updatedUser = await user.update(first_name, last_name, username, email);
  res.send(updatedUser);
};

module.exports = updateUser;
