import mysql from "mysql";

const mysqlConfig = 
{
    host: "localhost",
    user: "root",
    password: "password",                                               //this is how you login to the mySql workbench
    database: "bestbuy",
};

const Connection = mysql.createPool(mysqlConfig);

const Query = (query, values) =>                                        //use function query and values to be sent with the query funciton. the method will return a new promise. the promise depending on status of promise needs the resolve and reject. 
{
    return new Promise((resolve, reject) =>
    {
        Connection.query(query, values, (error, results) =>             //pass in the query paramaters, values and callback, will pass in error if there is one and the results. 
        {
            if (error)
            {
                reject(error);  
            } 
            resolve(results);
        });
    });
};

module.exports = { Query, };                                            //export employees here