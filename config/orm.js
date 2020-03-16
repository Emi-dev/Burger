const connection = require("./connection");

const orm = {
    // SELECT
    all: function(table, cb) {
        let queryString = "SELECT * FROM " + table;
        console.log("orm.all: ", queryString);

        connection.query(queryString, function(err, result) {
            if(err) throw err;
            cb(result);
        });
    },

    // INSERT
    create: function(table, cols, vals, cb) {
        let queryString = "INSERT INTO " + table;
        queryString += " (" + cols.toString() + ") ";
        queryString += "VALUES" + " (" + printQuestionMarks(vals.length) +  ")";
        console.log("orm.create: ", queryString);

        connection.query(queryString, vals, function(err, result) {
            if(err) throw err;
            cb(result);
        });
    },

    // UPDATE
    update: function(table, obj, condition, cb) {
        let queryString = "UPDATE " + table;
        // queryString += " SET " + objToString(obj);
        queryString += " SET devoured=true";
        queryString += " WHERE " + condition;
        console.log("orm.update: ", queryString);

        connection.query(queryString, function(err, result) {
            if(err) throw err;
            cb(result);
        })
    }
};

//  Function to create an array of quesiton marks with the number of given number.
//  And return the string of the question marks.
function printQuestionMarks(num) {
    const questionMarks = [];
    for(let i = 0; i < num; i++) {
        questionMarks.push("?");
    }
    return questionMarks.toString();
}

// Function to convert an object to a query string and return the string.
// e.g. {id: 1, burger_name: "Cheese Burger"} -> id=1,burger_name=Cheese Burger
function objToString(obj) {
    // Object.entries method creates an array of given object's arrays. 
    // Each inner array has two items: property and value.
    const entries = Object.entries(obj);
    const newObjArr = [];
    entries.forEach(entry => {
        let newEntry = `${entry[0]}=`;
        if(typeof entry[1] === "string") newEntry += `"${entry[1]}"`;
        else newEntry += `${entry[1]}`;
        // push "key=value" into newObjArr
        newObjArr.push(newEntry);
    });
    return newObjArr.toString();
}

module.exports = orm;