// Import MySQL connection.
const connection = require("./connection.js");

// Helper function for SQL syntax.???
function printQuestionMarks(num) {
    var arr = [];
  
    for (var i = 0; i < num; i++) {
        arr.push("?");
    }
  
    return arr.toString();
}

// Helper function to convert object key/value pairs to SQL syntax???


var orm ={
    all: function (table, cb) {
        var queryString = "SELECT * FROM " + table + ";";
        connection.query(queryString, function (err, result) {
            cb(result);
        });
    },
    /** Search based on a single condition
    * @param {string} table - Target table of the new entry.
    * @param {string} cond - Column Name of condition where results are looked for.
    * @param {any} val - Value of the condition being searched for
    * @param {function} cb - Callback Function
    */
    allBy: function (table, cond, val, cb) {
        var condition = cond;
        var queryString = "SELECT * FROM " + table + " WHERE " + condition + " = ? ;";

        console.log("ORM Searching for: " + queryString);
 
        connection.query(queryString, val, function (err, result) {
            console.log("ORM Result", result);
            cb(result);
        });
    },
    /** Add a new entry in a trable
    * @param {string} table - Target table of the new entry.
    * @param {array} cols - Array of collumns being added.
    * @param {array} vals - Array of values corresponding to the collumns
    * @param {function} cb - Callback Function
    */
    create: function (table, cols, vals, cb) {
        var columns = cols.toString();
        var values = printQuestionMarks(vals.length);
        var queryString = "INSERT INTO " + table + "(" + columns + ")" 
            + " VALUES ( " + values + " ) ;";
        
        console.log("ORM Creating new entry", queryString);
        console.log("ORM Creating Values", vals);

        connection.query(queryString, vals, function (err, results) {
            cb(results);
        });
    },

    update: function (table, cond, vals, cb) {
        var condition = cond;
        var queryString = "UPDATE" + table + " SET " + vals + "WHERE " + cond;

        console.log("ORM Searching for: " + queryString);
 
        connection.query(queryString, vals, function (err, result) {
            console.log("ORM Result", result);
            cb(result);
        });
    },
    /** Search based on 2 conditions
    * @param {string} table - Target table of the new entry.
    * @param {string} cond - Column Name of condition where results are looked for.
    * @param {any} val - Value of the condition being searched for
    * @param {function} cb - Callback Function
    */
    allBy2: function (table, cond, cond2, vals, cb) {
        var condition = cond;
        var condition2 = cond2;        
        var queryString = "SELECT * FROM " + table + " WHERE " + condition + " = ? AND " + condition2 + " = ?;";

        console.log("ORM Searching for: " + queryString);
 
        connection.query(queryString, vals, function (err, result) {
            console.log("ORM Result", result);
            cb(result);
        });
    },
    ByDateOne: function (cb){
        var queryString = "SELECT * FROM historyNames WHERE (birth_year BETWEEN 1700 AND 1800);";
        console.log("ORM Searching for: " + queryString);

        connection.query(queryString, function(err, result){
            if(err) throw err;
            cb(result);
        });
    },
    ByDateTwo: function (cb){
        var queryString = "SELECT * FROM historyNames WHERE (birth_year BETWEEN 1600 AND 1700);";
        console.log("ORM Searching for: " + queryString);

        connection.query(queryString, function(err, result){
            if(err) throw err;
            cb(result);
        });
    },
    ByDateThree: function (cb){
        var queryString = "SELECT * FROM historyNames WHERE (birth_year BETWEEN 1500 AND 1600);";
        console.log("ORM Searching for: " + queryString);

        connection.query(queryString, function(err, result){
            if(err) throw err;
            cb(result);
        });
    },
    ByDateFour: function (cb){
        var queryString = "SELECT * FROM historyNames WHERE (birth_year BETWEEN 1400 AND 1500);";
        console.log("ORM Searching for: " + queryString);

        connection.query(queryString, function(err, result){
            if(err) throw err;
            cb(result);
        });
    },
    ByDateFive: function (cb){
        var queryString = "SELECT * FROM historyNames WHERE (birth_year BETWEEN 1300 AND 1400);";
        console.log("ORM Searching for: " + queryString);

        connection.query(queryString, function(err, result){
            if(err) throw err;
            cb(result);
        });
    },
    ByDateSix: function (cb){
        var queryString = "SELECT * FROM historyNames WHERE (birth_year BETWEEN 1200 AND 1300);";
        console.log("ORM Searching for: " + queryString);

        connection.query(queryString, function(err, result){
            if(err) throw err;
            cb(result);
        });
    },
    ByDateSeven: function (cb){
        var queryString = "SELECT * FROM historyNames WHERE (birth_year BETWEEN 1100 AND 1200);";
        console.log("ORM Searching for: " + queryString);

        connection.query(queryString, function(err, result){
            if(err) throw err;
            cb(result);
        });
    },
    ByDateEight: function (cb){
        var queryString = "SELECT * FROM historyNames WHERE (birth_year BETWEEN 1000 AND 1100);";
        console.log("ORM Searching for: " + queryString);

        connection.query(queryString, function(err, result){
            if(err) throw err;
            cb(result);
        });
    },
    ByDateNine: function (cb){
        var queryString = "SELECT * FROM historyNames WHERE (birth_year BETWEEN 900 AND 1000);";
        console.log("ORM Searching for: " + queryString);

        connection.query(queryString, function(err, result){
            if(err) throw err;
            cb(result);
        });
    },
    ByDateTen: function (cb){
        var queryString = "SELECT * FROM historyNames WHERE (birth_year BETWEEN 800 AND 900);";
        console.log("ORM Searching for: " + queryString);

        connection.query(queryString, function(err, result){
            if(err) throw err;
            cb(result);
        });
    },
    ByDateEleven: function (cb){
        var queryString = "SELECT * FROM historyNames WHERE (birth_year BETWEEN 700 AND 800);";
        console.log("ORM Searching for: " + queryString);

        connection.query(queryString, function(err, result){
            if(err) throw err;
            cb(result);
        });
    },
    ByDateTwelve: function (cb){
        var queryString = "SELECT * FROM historyNames WHERE (birth_year BETWEEN 600 AND 700);";
        console.log("ORM Searching for: " + queryString);

        connection.query(queryString, function(err, result){
            if(err) throw err;
            cb(result);
        });
    },
    ByDateThirdteen: function (cb){
        var queryString = "SELECT * FROM historyNames WHERE (birth_year BETWEEN 500 AND 600);";
        console.log("ORM Searching for: " + queryString);

        connection.query(queryString, function(err, result){
            if(err) throw err;
            cb(result);
        });
    },
    ByDateFourteen: function (cb){
        var queryString = "SELECT * FROM historyNames WHERE (birth_year BETWEEN 400 AND 500);";
        console.log("ORM Searching for: " + queryString);

        connection.query(queryString, function(err, result){
            if(err) throw err;
            cb(result);
        });
    },
    ByDateFiveteen: function (cb){
        var queryString = "SELECT * FROM historyNames WHERE (birth_year BETWEEN 300 AND 400);";
        console.log("ORM Searching for: " + queryString);

        connection.query(queryString, function(err, result){
            if(err) throw err;
            cb(result);
        });
    },
    ByDateSixteen: function (cb){
        var queryString = "SELECT * FROM historyNames WHERE (birth_year BETWEEN 200 AND 300);";
        console.log("ORM Searching for: " + queryString);

        connection.query(queryString, function(err, result){
            if(err) throw err;
            cb(result);
        });
    },
    ByDateSeventeen: function (cb){
        var queryString = "SELECT * FROM historyNames WHERE (birth_year BETWEEN 100 AND 200);";
        console.log("ORM Searching for: " + queryString);

        connection.query(queryString, function(err, result){
            if(err) throw err;
            cb(result);
        });
    },
    ByDateEightteen: function (cb){
        var queryString = "SELECT * FROM historyNames WHERE (birth_year BETWEEN 0 AND 100);";
        console.log("ORM Searching for: " + queryString);

        connection.query(queryString, function(err, result){
            if(err) throw err;
            cb(result);
        });
    },
}
// Object for all our SQL statement functions. 


// Export the orm object for the model.
module.exports = orm;