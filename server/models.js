const { Pool } = require('pg');
// const dotenv = require('dotenv');

// get access to the database link in the env folder
// dotenv.config()
// const uri = process.env.PGURI;

const pool = new Pool({
    connectionString: "postgres://zwytoyzq:JsFHKOTACZ1akN3bHPJSH2upL-MGliVk@peanut.db.elephantsql.com/zwytoyzq",
})

const db = {
    query: (text, params, callback) => {
        return pool.query(text, params, callback);
    },
};

module.exports = db;
