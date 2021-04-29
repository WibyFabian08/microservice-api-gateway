const axios = require('axios');

module.exports = async (req, res) => {
    const chapterId = req.params.id;

    await axios.delete(`http://localhost:8000/api/chapters/${chapterId}`)
    .then((result) => {
        return res.json(result.data);
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