var connection = require("../config/connection.js");

var orm = {
    selectAll: function(cb) {
        connection.query("SELECT * FROM burgers", function() {
            if (err) throw err;
            console.log(result);
            cb(result);
        })
    },
    insertOne: function(burger_name, cb) {
        connection.query("INSERT INTO burgers SET ?", {
            burger_name: burger_name,
            devoured: false,
        }, function(err, result) {
            if (err) throw err;
            console.log(result);
            cb(result);
        });
    }, 
    updateOne: function(burgerID, cb) {
        connection.query("UPDATE burgers SET ? WHERE ?", [{devoured: true}, {id: burgerID}], function(err, result) {
            if (err) throw err;
            console.log(result);
            cb(result);
        });
    }
};

// export the ORM object
module.exports = orm;