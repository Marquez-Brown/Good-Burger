// Set up MySQL connection.
var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "j21q532mu148i8ms.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
  port: 3306,
  user: "h87716zm9b4t66rs",
  password: "kofshi8ffbln1irn",
  database: "acwomagvg44ay6px"
});

// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;
