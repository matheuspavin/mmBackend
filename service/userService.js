const databaseService = require('./databaseService');

var listClient = function(){
    var consult = "SELECT * FROM mymechanic.user"
    return databaseService.get(consult, [])
}


var insertPerson = function(person){
    var query1 = "INSERT INTO person(name, info) VALUES($1,$2)";
    var params = [person.name, person.info];
    return query(query1, params)
};


module.exports = {
    listClient
}