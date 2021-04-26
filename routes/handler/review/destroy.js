const axios = require('axios');

module.exports = async (req, res) => {
    const reviewId = req.params.id;

    await axios.delete(`http://localhost:8000/api/reviews/${reviewId}`)
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