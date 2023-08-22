const { User } = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const handleLogin = async (req, res) => {
  const { email, password } = req.body;
  try {
    const foundUser = await User.findOne({ email: email });
    if (!foundUser)
      return res.status(401).json({ error: "Email is incorrect" }); //Unauthorized
    if (foundUser.active == false)
      return res.status(401).json({ error: "This Email not active " }); //Unauthorized

    // evaluate password
    const match = await bcrypt.compare(password, foundUser.password);
    if (match) {
      // create JWTs
      const fullName = foundUser.fullName;
      const email = foundUser.email;
      const role = foundUser.role;
      const _id = foundUser._id;
      const token = jwtTokens({ fullName, email, role, _id });
      res.status(201).json({
        success: ` user ${foundUser.fullName} are authorized`,
        token: token,
      });
    } else {
      res.status(401).json({ error: "incorrect password" });
    }
  } catch (error) {
    res.status(500).json({ error: `${error.message} in handleLogin` });
  }
};

function jwtTokens({ fullName, email, role, _id }) {
  const userToken = { fullName, email, role, _id };
  const accessToken = jwt.sign(userToken, process.env.JWT_SECRET);
  return accessToken;
}
module.exports = { handleLogin };
