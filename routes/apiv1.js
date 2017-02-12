const express = require('express');
const useragent = require('useragent');
const router = express.Router();

router.get('/whoami', function (req, res) {
    const ipaddress = req.headers['x-forwarded-for'] ||
        req.connection.remoteAddress ||
        req.socket.remoteAddress ||
        req.connection.socket.remoteAddress;;
    
    const os = useragent.parse(req.headers['user-agent']).os.toString();
    const lang = req.headers["accept-language"].split(',')[0];
    res.json({
        status: 'OK',
        ipaddress,
        lang,
        os
    });
});

module.exports = router;