const poolPromise = require('../config/database');

module.exports = { 
    queryParam: async (query) => {
        return new Promise ( async (resolve, reject) => {
            try {
                const pool = await poolPromise;
                const connection = await pool.getConnection();
                try {
                    const result = await connection.query(query);
                    pool.releaseConnection(connection);
                    resolve(result);
                } catch (err) {
                    pool.releaseConnection(connection);
                    reject(err);
                }
            } catch (err) {
                reject(err);
            }
        });
    },
    queryParamArr: async (query, value) => {
        return new Promise(async (resolve, reject) => {
            try {
                const pool = await poolPromise;
                const connection = await pool.getConnection();
                try {
                    const result = await connection.query(query, value);
                    pool.releaseConnection(connection);
                    resolve(result);
                } catch (err) {
                    pool.releaseConnection(connection);
                    reject(err);
                }
            } catch (err) {
                reject(err);
            }
        });
    },
    Transaction: async (...args) => {
        return new Promise(async (resolve, reject) => {
            try {
                const pool = await poolPromise;
                const connection = await pool.getConnection();
                try {
                    await connection.beginTransaction();
                    for(let it of args){
                        await it(connection);
                    }
                    await connection.commit();
                    resolve(true);
                } catch (err) {
                    await connection.rollback();
                    console.log('transaction error :', err);
                    reject(err);
                } finally{
                    pool.releaseConnection(connection);
                }
            } catch (err) {
                console.log('connection error :', err);
                reject(err);
            }
        });
    }
}