const axios = require('axios');

module.exports = async (req, res) => {
    const imageId = req.params.id;

    await axios.delete(`http://localhost:8000/api/image-courses/${imageId}`)
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