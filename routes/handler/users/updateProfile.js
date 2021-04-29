const axios = require('axios');

module.exports = async (req, res) => {
    try {
        const id = req.user.data.id;

        await axios.put(`http://localhost:5000/users/${id}`, req.body).then((result) => {
            return res.json(result.data)
        })
    } catch (error) {
        if(error.code === 'ECONNREFUSED') {
            return res.status(500).json({
                status: 'error',
                message: 'service unavailable'
            });
        }

        const { status, data } = error.response;
        return res.status(status).json(data);
    }
}