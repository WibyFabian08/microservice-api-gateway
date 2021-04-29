const axios = require("axios");

module.exports = async (req, res) => {
  const user_id = req.user.data.id;
  await axios
    .get("http://localhost:8000/api/my-courses", {
      params: { user_id: user_id },
    })
    .then((result) => {
      return res.json(result.data);
    })
    .catch((error) => {
      if (error.code === "ECONNREFUSED") {
        return res.status(500).json({
          status: "error",
          message: "service unavailable",
        });
      }

      const { status, data } = error.response;
      return res.status(status).json(data);
    });
};
