exports.success = (req, res, message, status) => {
    res.status(status || 200).send({
        error: '',
        body: message
    });
};

exports.error = (req, res, message, status, details) => {
    console.error(details);
    res.status(500 || status).send({
        error: message,
        body: ''
    });
};
