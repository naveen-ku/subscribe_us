
var faker = require("faker");
// var mysql = require("mysql");

// console.log(faker.internet.email());
// console.log(faker.date.past());

// function generateAddress() {
//   console.log(faker.address.streetAddress());
//   console.log(faker.address.city());
//   console.log(faker.address.state());
// }

// generateAddress();
// generateAddress();
// generateAddress();

var mysql = require("mysql");
var connection = mysql.createConnection({
    host: "host",
    user: "user",
    password: "password",
    database: "subscribe_us"
});

connection.connect(err => {
  if (err) {
    console.log("Can't connect to the database.");
  }
});

//------------SELECTING DATA-------------------

// var q = 'SELECT COUNT(*) AS total FROM users';

// connection.query(q, function(error, results, fields) {
//   if (error) throw error;
//   console.log(results[0].total);
// });

//------------INSERTING DATA--------------------

//------Method 1---------
// var q = 'INSERT INTO users(email) VALUES ("heroku23@gmail.com")';
// connection.query(q, function(error, results, fields) {
//   if (error) throw error;
//   console.log(results);
// });

//------Method 2---------
// var person = { 
//     email: faker.internet.email(), 
//     created_at: faker.date.past() 
// };
// connection.query("INSERT INTO users SET ?", person, function( error, results, fields ) {
//   if (error) throw error;
//   console.log(results);
// });

var data = [];

for(let i=0; i<600; i++){
  data.push([faker.internet.email(), faker.date.past()])
}

var q = 'INSERT INTO users ( email, created_at) VALUES ?'
connection.query(q, [data], function( error, results, fields ) {
  if (error) throw error;
  console.log(results);
});


connection.end();
