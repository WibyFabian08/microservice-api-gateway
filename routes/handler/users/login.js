const axios = require("axios");
const jwt = require("jsonwebtoken");
const {
  JWT_SECRET,
  JWT_SECRET_REFRESH_TOKEN,
  JWT_TOKEN_EXPIRED,
  JWT_TOKEN_REFRESH_EXPIRED,
} = process.env;

module.exports = async (req, res) => {
  try {
    const user = await axios.post(
      "http://localhost:5000/users/login",
      req.body
    );

    // buat token dan refresh token
    const token = jwt.sign({ data: user.data.data }, JWT_SECRET, {
      expiresIn: JWT_TOKEN_EXPIRED,
    });

    const refreshToken = jwt.sign(
      { data: user.data.data },
      JWT_SECRET_REFRESH_TOKEN,
      { expiresIn: JWT_TOKEN_REFRESH_EXPIRED }
    );

    // simpan token ke db
    await axios
      .post("http://localhost:5000/refresh_tokens", {
        refresh_token: refreshToken,
        user_id: user.data.data.id,
      })
      .then(() => {
        return res.json({
          token: token,
          refresh_token: refreshToken,
          data: user.data.data
        });
      })
      .catch((err) => {
        return res.json(err.message);
      });
  } catch (error) {
    if (error.code === "ECONNREFUSED") {
      return res.status(500).json({
        status: "error",
        message: "service unavailable",
      });
    }

    return res.json(error.message);
  }
};
