const axios = require('axios');

module.exports = async (req, res) => {
    const mentorId = req.params.id;

    await axios.delete(`http://localhost:8000/api/mentors/${mentorId}`)
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