const jwt = require('jsonwebtoken');

const getSession = async (userToken) => {
    let user = await userService.getUserAndDetails(userToken.idUser);
    user.language = userToken.language;
    const customers = await customerService.getCustomersByUser(user.idUser);

    if (!user.idActiveCustomer) {
        userService.changeActiveCustomer(user.idUser, customers[0].idCustomer);
    }

    return {
        user,
        customers
    }
};

const isAuthenticated = function (request, response, next) {
    let token = request.headers['x-access-token'];
    jwt.verify(token, security.certificate, async (err, tokenUser) => {
        if (err) {
            response.status(401).end();
        } else {
            await createUserDetailsIfDoesntExist(tokenUser.idUser);
            request.user = await userService.getUserAndDetails(tokenUser.idUser);
            request.user.language = tokenUser.languageCode;
            next();
        }
    });
    next();
};

const createUserDetailsIfDoesntExist = async function (idUser) {
    const userDetails = await userService.getUserDetails(idUser);
    if (!userDetails) {
        await userService.saveUserDetails(idUser);
    }
};

const hasActiveCustomer =  (req, res, next) => {
    let user = req.user;
    req.customer = { id: user.idActiveCustomer };
    next();
};

// FIXME: Autorização desabilitada temporariamente!!!
const isAuthorized = function (req, res, next) {
    // co(function* () {
    //     let idInstitution = req.params.idInstitution;
    //     if (!idInstitution) {
    //         next();
    //         return;
    //     }
    //     let user = req.user;
    //     let permission = yield database.get('select * from diary.permission where id_institution = $1 and id_user = $2', [idInstitution, user.id]);
    //     if (permission) {
    //         next();
    //         return;
    //     }
    //     res.status(403).end();
    // });

    next();
};

module.exports = {
    isAuthenticated,
    isAuthorized
};
