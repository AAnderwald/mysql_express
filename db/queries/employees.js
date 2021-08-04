import { request, response, Router } from "express";
import QueryString from "qs";
import {Query} from  "../models";                                                                           //import the query, below will create functions to use the query. 

const allEmployees = async () =>                                                                            //will get all employees, don't need to pass anything through just wnat to return the results of the query
{
    return Query("SELECT EmployeeID, FirstName, LastName, Title FROM employees");                           //select the ID first name last name and title from teh empoyess
}

const oneEmployee = async (id) =>                                                                           //this is for one emloyee and you wil need the id so put (id)
{
    return Query(
        "SELECT EmployeeID, FirstName, LastName, Title FROM employees WHERE EmpolyeeID = ?",                //return result of the query  need to pass in the values but also want to pass the values in as an array
        [id]
    );
};

const addEmployee = async (body) =>
{
    return Query("INSERT INTO employees SET ?", [body]);
};

const updateEmployee = async (body, id) =>
{
    return Query ("UPDATE employess SET ? WHERE EmpolyeeID = ?", [body, id]);
};

const removeEmployee = async (id) => 
{
    return Query("DELETE from employees WHERE EmployeeID = ?", [id]);
};

module.exports =                                                                                            //export all of these from above
{
    allEmployees,
    oneEmployee,
    addEmployee,
    updateEmployee,
    removeEmployee,
};

const {allEmployees, oneEmployee} = require("../db/queries/empolyees");

Router.get ("api/employees", async(request, response, next) =>
{
    try {
        let data = await allEmployees();
        response.json(data);
    } catch (error) {
        next(error);
    }
});

Router.get("api/empoyees/:id", async (request, response, next) =>
{
    let { id } = request.params;
    try {
        let data = await oneEmployee(id);
        response.json(data);
    } catch (error) {
    next(error);
    }
});