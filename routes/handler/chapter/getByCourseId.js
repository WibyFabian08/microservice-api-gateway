const axios = require('axios');

module.exports = async (req, res) => {
    await axios.get('http://localhost:8000/api/chapters', {params: {...req.query}})
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