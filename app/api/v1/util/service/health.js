
module.exports = {
    healthCheck: (req, res, next) => {
        var responseData = {
            status: 'UP',
            healthInfo: { status: 'UP', appName: 'My First NodeJS Application' }
        };
        res.send(responseData);
    }
}