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

var deletePerson = function(person){
    var query1 = "DELETE from person where id_person = $1";
    var params = [person.idPerson];
    return query(query1, params)
  };






module.exports = {
    listClient,
    insertPerson,
    deletePerson
}