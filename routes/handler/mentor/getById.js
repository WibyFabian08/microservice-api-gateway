const axios = require('axios');

module.exports = async (req, res) => {
    const mentorId = req.params.id;

    await axios.get(`http://localhost:8000/api/mentors/${mentorId}`)
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