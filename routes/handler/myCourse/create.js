const axios = require('axios');

module.exports = async (req, res) => {
    const data = req.body;

    await axios.post('http://localhost:8000/api/my-courses', data)
    .then((result) => {
        return res.json(result.data)
    })
    .catch((err) => {
        return res.status(400).json({
            status: 'error',
            message: err
        })
    })
}