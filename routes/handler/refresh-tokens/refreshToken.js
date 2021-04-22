const jwt = require("jsonwebtoken");
const axios = require("axios");
const {
  JWT_SECRET,
  JWT_SECRET_REFRESH_TOKEN,
  JWT_TOKEN_EXPIRED,
  JWT_TOKEN_REFRESH_EXPIRED,
} = process.env;

module.exports = async (req, res) => {
  try {
    // get token dan email dari request
    const refreshToken = req.body.refresh_token;
    const email = req.body.email;

    // cek token dan email kosong atau tidak
    if (!refreshToken || !email) {
      return res.status(400).json({
        status: "error",
        message: "invalid token",
      });
    }

    // get token dari db
    await axios
      .get("http://localhost:5000/refresh_tokens", {
        params: { refresh_token: refreshToken },
      })
      .then((result) => {
        const token = result.data.token;

        // verifikasi token sama atau tidak
        jwt.verify(token.token, JWT_SECRET_REFRESH_TOKEN, (err, decoded) => {
          if (err) {
            return res.status(403).json({
              status: "error",
              message: err.message,
            });
          }

          // cek email sama atau tidak dengan email di token
          if (email !== decoded.data.email) {
            return res.status(400).json({
              status: "error",
              message: "email is not valid",
            });
          }

          // jika sudah ok buat lagi refresh token
          const token = jwt.sign(
            { data: decoded.data },
            JWT_SECRET_REFRESH_TOKEN,
            { expiresIn: JWT_TOKEN_REFRESH_EXPIRED }
          );

          // lalu kirim token sebagai response
          return res.json({
            token: token,
          });
        });
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
