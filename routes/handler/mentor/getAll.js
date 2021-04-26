const axios = require('axios');

module.exports = async (req, res) => {
    const mentorId = req.params.id;

    await axios.get('http://localhost:8000/api/mentors')
    .then((result) => {
        return res.json({
            status: 'success',
            data: result.data
        })
    })
    .catch((err) => {
        return res.status(400).json({
            status: 'error',
            message: err.message
        })
    })
}