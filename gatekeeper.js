const checkPass = (req, res, next) => {
    const pass = req.query.pass;
    if (pass === 'ferret') {
        next();
    } else {
        res.status(400).json({message: "Invalid password"});
    }
}

module.exports.checkPass = checkPass;