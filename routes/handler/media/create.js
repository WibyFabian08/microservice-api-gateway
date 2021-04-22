const { default: axios } = require("axios");

module.exports = async (req, res) => {
    // try {
    //     const media = await api.post('/media', req.body);
    //     return res.json(media.data);
    // } catch (error) {
    //     if(error.code === 'ECONNREFUSED') {
    //         return res.status(500).json({
    //             status: 'error',
    //             message: 'service unavailable'
    //         });
    //     }

    //     const { status, data } = error.response;
    //     return res.status(status).json(data);
    // }

    try {
        await axios.post('http://localhost:8080/media', req.body)
        .then((result) => {
            return res.json(result.data);
        })
    } catch(error) {
        if(error.code === 'ECONNREFUSED') {
            return res.status(500).json({
                status: 'error',
                message: 'service unavailable'
            })
        }

        return res.json(error.message);
    }
}