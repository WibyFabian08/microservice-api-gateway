const axios = require('axios');

module.exports = async (req, res) => {
    try {
        await axios.post('http://localhost:5000/users/register', req.body)
        .then((result) => {
            return res.json(result.data)
        })
    } catch (error) {
        if(error.code === 'ECONNREFUSED') {
            return res.status(500).json({
                status: 'error',
                message: 'service unavailalbe'
            })
        }

        return res.json(error.message);
    }
}