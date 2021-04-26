const axios = require('axios');

module.exports = async (req, res) => {
    const data = req.body;
    const reviewId = req.params.id;

    await axios.put(`http://localhost:8000/api/reviews/${reviewId}`, data)
    .then((result) => {
        return res.json(result.data)
    })
    .catch((err) => {
        return res.status(400).json({
            status: 'error',
            message: err.message
        })
    })
}