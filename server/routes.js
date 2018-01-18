'use strict';

const authService = require('services/authService');

module.exports = function (app) {
    // FIXME: Precisa disso?? ⤵ Sem isso o navegador bloquia as requests quando feitas de outro domínio. https://enable-cors.org/server_expressjs.html
    // app.all('*', function (req, res, next) {
    //     res.header('Access-Control-Allow-Origin', '*');
    //     res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    //     res.header('Access-Control-Allow-Headers', 'Content-Type, x-access-token');
    //     next();
    // });

    app.use(function (req, res, next) {
        req.mmbackend = {};
        next();
    });

    app.use('/auth',  authService.isAuthenticated, require('routes/authRoute'));




    // Error Handler
    app.use(function (err, req, res, next) {
        console.error('Error:', err);

        if (err instanceof AcademicError) {
            res.status(422).send({ message: err.message, params: err.params });
        } else {
            res.status(500).send({ message: err.message });
        }
    });

    app.route('*').get(function (req, res) {
        res.sendFile(app.get('appPath') + '/index.html');
    });
};
