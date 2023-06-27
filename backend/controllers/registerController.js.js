const bcrypt = require("bcrypt");
const { User } = require("../models/User");
const jwt = require('jsonwebtoken')

const handleNewUser = async (req, res) => {
  const { fullName, email, role, password} = req.body;
  try {
    // email check
    const user = await User.findOne({ email: email });
    if (user !== null) {
      return res.status(409).json({ error: "email already exists try another one" });
    }
    // password hash
    const hashedPwd = await bcrypt.hash(password, 10);
    const Newuser = await User.create({
      fullName,
      email,
      role,
      password:hashedPwd,
    });
    const token = jwtTokens({ fullName, email, role });
    res
      .status(201)
      .json({ success: `New user ${fullName} created!`, token: token });
  } catch (error) {
    res.status(500).json({ error: `${error.message} in handleNewUser` });
  }
};

function jwtTokens({ fullName, email, role }) {
  const userToken = { fullName, email, role };
  const accessToken = jwt.sign(userToken, process.env.JWT_SECRET);
  return accessToken;
}

module.exports = { handleNewUser };
