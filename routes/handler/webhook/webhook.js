const axios = require('axios');
const { rawListeners } = require('../../../app');

module.exports = async (req, res) => {
    $data = req.body;

    await axios.post('http://localhost:8001/api/webHooks', $data)
    .then((result) => {
        return res.json(result.data);
    })
    .catch((error) => {
        const { status, data } = error.response;
        return res.status(status).json(data);
    })
}