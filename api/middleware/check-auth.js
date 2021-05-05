

module.exports = (req, res, next) => {
    try {
        //TODO:
        //Apply your logic to implement authentication via tokens etc
        next();
    } catch (err) {
        res.status(401).json({
            error: 'Auth Faild',
            trace: err
        });
    }
}