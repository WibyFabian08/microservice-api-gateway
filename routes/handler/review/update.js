const axios = require('axios');

module.exports = async (req, res) => {
    const data = req.body;
    const reviewId = req.params.id;

    await axios.put(`http://localhost:8000/api/reviews/${reviewId}`, data)
    .then((result) => {
        return res.json(result.data)
    })
    .catch((error) => {
        if(error.code === 'ECONNREFUSED') {
            return res.status(500).json({
                status: 'error',
                message: 'service unavailable'
            });
        }

        const { status, data } = error.response;
        return res.status(status).json(data);
    })
}