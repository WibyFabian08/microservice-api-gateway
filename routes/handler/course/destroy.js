const axios = require('axios');

module.exports = async (req, res) => {
    const courseId = req.params.id;

    await axios.delete(`http://localhost:8000/api/courses/${courseId}`)
    .then((result) => {
        return res.json({
            status: 'success',
            message: result.data
        })
    })
    .catch((err) => {
        return res.status(400).json({
            status: 'error',
            message: err.message
        })
    })
}