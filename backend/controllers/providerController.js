const { Provider } = require("../models/Providers");

const getProvider = async (req, res) => {
  try {
        const allProvider = await Provider.find({ active: true });
        res.json(allProvider);

  } catch (error) {
    res.status(500).json({ error: `${error.message} in provider/getProvider` });
    console.log({ error: `${error.message} in provider/getProvider` });
  }
};


module.exports = { getProvider};
