const axios = require('axios');

module.exports = async (req, res) => {
    const courseId = req.params.id;

    await axios.get(`http://localhost:8000/api/courses/${courseId}`)
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