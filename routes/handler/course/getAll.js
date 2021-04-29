const axios = require('axios');

module.exports = async (req, res) => {
    await axios.get('http://localhost:8000/api/courses', {params: {status: 'published'}})
    .then((result) => {
        const courseData = result.data;

        const firstPage = courseData.data.first_page_url.split('?').pop();
        const lastPage = courseData.data.last_page_url.split('?').pop();

        courseData.data.first_page_url = `http://localhost:3000/courses?${firstPage}`;
        courseData.data.last_page_url = `http://localhost:3000/courses?${lastPage}`;

        if(courseData.data.next_page_url) {
            const nextPage = courseData.data.next_page_url.split('?').pop();
            courseData.data.next_page_url = `http://localhost:3000/courses?${nextPage}`;
        }

        if(courseData.data.prev_page_url) {
            const prevPage = courseData.data.prev_page_url.split('?').pop();
            courseData.data.next_prev_url = `http://localhost:3000/courses?${prevPage}`;
        }

        courseData.data.path = `http://localhost:3000/courses`;

        return res.json(courseData)
    })
    .catch((error) => {
        if(error.code === 'ECONNREFUSED') {
            return res.status(500).json({
                status: 'error',
                message: 'service unavailable'
            });
        }

        const { status, data } = error.response;
        return res.status(status).json(data);
    })
}