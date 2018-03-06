const databaseService = require('./databaseService');

var listClient = function(){
    var consult = "SELECT * FROM pessoa"
    return databaseService.get(consult, [])
}


module.exports = {
    listClient
}