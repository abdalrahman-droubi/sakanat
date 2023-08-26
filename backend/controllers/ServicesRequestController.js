const { ServicesRequest } = require("../models/ServicesRequest");

const handleNewRequestServices = async (req, res) => {
  const { providerId, userId } = req.params;
  const { serviceType, email, dateTime, details, phoneNumber, location } =
    req.body;
    console.log({ serviceType, email, dateTime, details, phoneNumber, location,providerId, userId });
  try {
      const newRequestServices = await ServicesRequest.create({
        serviceType,
        email,
        dateTime,
        details,
        phoneNumber,
        location,
        user:userId,
        provider:providerId,
      });
      res
        .status(201)
        .json({ success: `New Request created!`});
  } catch (error) {
    res
      .status(500)
      .json({ error: `${error.message} in handleNewRequestServices` });
  }
};


const getAllRequest = async (req, res) => {
  const { userId } = req.params;
  try {
      const AllRequest = await ServicesRequest.find({user:userId}).populate("provider","companyName city phoneNumber serviceType ");
      res
        .status(200)
        .json(AllRequest);
  } catch (error) {
    res
      .status(500)
      .json({ error: `${error.message} in getAllRequest` });
  }
};

module.exports = {
  handleNewRequestServices,
  getAllRequest
};
