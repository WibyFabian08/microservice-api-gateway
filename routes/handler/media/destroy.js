const { default: axios } = require("axios")

module.exports = async (req, res) => {
    try {
        await axios.delete(`http://localhost:8080/media/${req.params.id}`)
        .then((result) => {
            return res.json(result.data)
        })
    } catch (error) {
        if(error.code === 'ECONNREFUSED') {
            return res.status(500).json({
                status: 'error',
                message: 'service unavailable'
            })
        }
        return res.json(error.message);
    }
}