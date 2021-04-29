const axios = require('axios');

module.exports = async (req, res) => {
    const lessonId = req.params.id;

    await axios.get(`http://localhost:8000/api/lessons/${lessonId}`)
    .then((result) => {
        return res.json(result.data)
    })
    .catch((error) => {
        if(error.code === 'ECONNREFUSED') {
            return res.status(500).json({
                status: 'error',
                message: 'service sourse unavailable'
            });
        }

        const { status, data } = error.response;
        return res.status(status).json(data);
    })
}