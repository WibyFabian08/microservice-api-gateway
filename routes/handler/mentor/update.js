const axios = require('axios');

module.exports = async (req, res) => {
    const data = req.body;
    const mentorId = req.params.id;

    await axios.put(`http://localhost:8000/api/mentors/${mentorId}`, data)
    .then((result) => {
        return res.json({
            stauts: 'success',
            data: result.data
        })
    })
    .catch((err) => {
        return res.status(400).json({
            status: 'error',
            message: err.message
        });
    })
}