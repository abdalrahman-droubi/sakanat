const { User } = require("../models/User");
const bcrypt = require("bcrypt");

const getUser = async (req, res) => {
  try {
    if (!req?.user)
      return res.status(401).json({ error: "User is UnAuthorized" });
    const user = await User.findOne({ email: req.user.email });
    if (!user) {
      return res
        .status(204)
        .json({ error: `User Email ${req.user.email} not found` });
    }
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: `${error.message} in user/getUser` });
  }
};

const updateUser = async (req, res) => {
  try {
    const { password, phoneNumber, fullName } = req.body;
    const { id } = req.params;
    const user = await User.findById(id);

    if (password) {
      const hashpassword = await bcrypt.hash(password, 10);
      user.fullName = fullName || user.fullName;
      user.phoneNumber = phoneNumber || user.phoneNumber;
      user.password = hashpassword;
      const updatedUser = await user.save();
      res.json(updatedUser);
    } else {
      user.fullName = fullName || user.fullName;
      user.phoneNumber = phoneNumber || user.phoneNumber;
      const updatedUser = await user.save();
      res.json(updatedUser);
    }
  } catch (error) {
    res.status(500).json({ error: `${error.message} in updateUser` });
    console.error("Error editing user:", error);
  }
};

// Retrieve specific user data
const getOneUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    res.json(user);
  } catch (err) {
    res.status(500).json({ error: "Failed to retrieve user data", err });
  }
};

module.exports = {
  getUser,
  updateUser,
  getOneUser,
};
