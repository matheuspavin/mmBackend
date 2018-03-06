const databaseService = require('./databaseService');

var listClient = function(){
    var consult = "SELECT * FROM mymechanic.user"
    return databaseService.get(consult, [])
}


module.exports = {
    listClient
}