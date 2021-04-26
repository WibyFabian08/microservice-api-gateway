const axios = require('axios');

module.exports = async (req, res) => {
    const data = req.body;
    const courseId = req.params.id;

    await axios.put(`http://localhost:8000/api/courses/${courseId}`, data)
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