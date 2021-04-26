const axios = require('axios');

module.exports = async (req, res) => {
    const data = req.body;
    const lessonId = req.params.id;

    await axios.put(`http://localhost:8000/api/lessons/${lessonId}`, data)
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