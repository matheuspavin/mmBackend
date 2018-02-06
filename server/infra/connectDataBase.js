

  var query = function (sql, params) {
    return new Promise(function (resolve, reject) {
      pg.connect(conString, function (err, client, done) {
        if (err) {
        console.log(err);
        };
        var query = client.query(sql, params);

        var rows = [];

        query.on('error', function (err) {
          done();
          console.log(sql + ' -> ' + params);
          console.log(err);
          reject(err);
        });

        query.on('row', function (row) {
         rows.push(row);
        });

        query.on('end', function (result) {
          done();
        resolve(rows);
        });
      });
    });
  };


  module.exports.insertGarage= function(garage){
      return query ("insert into mymechanic.garage(name, email, cep, born_year, cellphone, description) values ($1,$2,$3,$4,$5,$6) returning *", [garage.name, garage.email, garage.cep, garage.born_year, garage.cellphone, garage.description]);
  };

  module.exports.insertCustomer= function(customer){
      return query ("insert into mymechanic.customer(name, email, cep, born_year, profession, car, sex, cellphone) values ($1,$2,$3,$4,$5,$6,$7,$8) returning *", [customer.name, customer.email, customer.cep, customer.born_year, customer.profession, customer.car, customer.sex, customer.cellphone]);
  };

  module.exports.insertUser= function(user){
      return query ("insert into mymechanic.user(id_customer, id_garage, password) values ($1,$2, $3) returning *", [user.id_customer, user.id_garage, user.password]);
  };

    module.exports.insertReview= function(review){
      return query ("insert into mymechanic.review(id_customer, id_garage, id_review_fk, review) values ($1,$2,$3,$4) returning *", [review.id_customer,  review.id_garage, review.id_review_fk, review.review]);
  };

  module.exports.insertAnswer= function(answer){
      return query ("insert into mymechanic.answer(id_customer, id_review, answer) values ($1,$2, $3) returning *", [review.id_customer, review.id_review, review.answer]);
};