const { default: axios } = require("axios")

module.exports = async (req, res) => {
    try {
        await axios.get(`http://localhost:8080/media/${req.params.id}`)
        .then((result) => {
            return res.json(result.data)
        })
    } catch(error) {
        return res.status(400).json({
            status: 'error',
            message: error.message
        })
    }
}