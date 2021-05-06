/**
 * Author: Muhammad Rehan
 * email: mrmuhammadrehan65@gmail.com
 * 
 * This code is subjected to an exam test, you might want to
 * copy this code and modify as your own need, you are free to 
 * use this code as your own.
 */

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