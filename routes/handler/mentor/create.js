const axios = require("axios");

module.exports = async (req, res) => {
  const data = req.body;
  await axios
    .post("http://localhost:8000/api/mentors", data)
    .then((result) => {
      return res.json({
        status: "success",
        data: result.data,
      });
    })
    .catch((err) => {
      return res.status(400).json({
        status: "error",
        message: err.message,
      });
    });
};
