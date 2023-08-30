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
const getOneProvider = async (req, res) => {
  try {
    const { id } = req.params;
    const oneProvider = await Provider.findById(id);
    res.json(oneProvider);
  } catch (error) {
    res.status(500).json({ error: `${error.message} in provider/getOneProvider` });
    console.log({ error: `${error.message} in provider/getOneProvider` });
  }
};
const updateProvidrRating = async (req, res) => {
  try {
    const { id } = req.params;
    const {rating} = req.body
    const oneProvider = await Provider.findById(id);
    const newRating = ((oneProvider.rate.rating * oneProvider.rate.numRating) + rating )/(oneProvider.rate.numRating + 1)
    const update = await Provider.findByIdAndUpdate(id,{rate:{
      rating : newRating,
      numRating :  oneProvider.rate.numRating + 1
    }})
    res.json(update);
  } catch (error) {
    res.status(500).json({ error: `${error.message} in provider/updateProvidrRating` });
    console.log({ error: `${error.message} in provider/updateProvidrRating` });
  }
};

module.exports = { getProvider, getOneProvider ,updateProvidrRating};
