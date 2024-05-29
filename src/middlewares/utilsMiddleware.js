function convertTextToJson(req, res, next) {
    if (req.is('text/plain')) {
        try {
            req.body = JSON.parse(req.body);
        } catch (e) {
            return res.status(400).send('Invalid JSON format');
        }
    }
    next();
}

export { convertTextToJson };
