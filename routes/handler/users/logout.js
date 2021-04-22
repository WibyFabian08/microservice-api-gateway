const axios = require('axios');

module.exports = async (req, res) => {
    try {
        const id = req.user.data.id;

        await axios.post('http://localhost:5000/users/logout/', {user_id: id}).then((result) => {
            return res.json({
                status: 'success',
                message: result.data
            })
        })
    } catch (error) {
        if(error.code === 'ECONNREFUSED') {
            return res.status(500).json({
                status: 'error',
                message: 'service unavailable'
            })
        }

        return res.json(error.message);d
    }
}