const axios = require('axios');

module.exports = async (req, res) => {
    const chapterId = req.params.id;

    await axios.delete(`http://localhost:8000/api/chapters/${chapterId}`)
    .then((result) => {
        return res.json(result.data);
    })
    .catch((err) => {
        return res.status(400).json({
            status: 'error',
            message: err.message
        })
    })
}