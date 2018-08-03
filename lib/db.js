var mysql = require('mysql');
var config=require('../config/default');
var pool  = mysql.createPool({
  connectionLimit : 10,
  host            : config.HOST,
  port            :config.PORT,
  user            :  config.USERNAME,
  password        :  config.PASSWORD,
  database        :  config.DATABASE
});
let query = (sql, values) => {
    
    return new Promise((resolve, reject) => {
        pool.getConnection((err, connection) => {
            if (err) {
                reject(err)
            } else {
                connection.query(sql, values, (err, rows) => {
                    if (err) {
                        reject(err)
                    } else {
                        resolve(rows)
                    }
                    connection.release()
                })
            }
        })
    })
};
module.exports = {
    query
}

