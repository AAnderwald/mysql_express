import express  from "express";                                                  //need to import express   
import { 
    getAllEmplolyees, 
    getOneEmployee, 
    insertOneEmpolyee, 
    updateOneEmployee, 
    removeOneEmpolyee,
} from "../db/queries/empolyees";

const router = express.Router();                                                //create a variable router

router.get("/:id?", async (request, response, next) => {                        //try / catch call employess and return that as the response data. will get both employees and id
    try {
        let { id } = request.params;
        let data;
        if (id) {
            [data] = await getOneEmployee(id);
        } else {
            data = await  getAllEmplolyees();                                   //need data to await, will need the async funtion line six
        }
        response.status(200).json(data || {msg:"No data" });
    } catch (error) {
        next(error);
    }
});

router.post("/", async (request, response, next) => {
    try {
      let {body} = request;
      let data = await insertOneEmpolyee(body);
      response.status(200).json(data); 
    } catch (error) {
        next(error);
    }
});

router.put("/:id", async (request, response, next) => {
    try {
        let {id} = request.params;
        let {body} = request;
        let data = await updateOneEmployee(id, body);
        response.status(200).json(data);
    } catch (error) {
        next(error);
    }
});

router.delete("/:id", async (request, response, next) => {
    try {
        let {id} = request.params;
        let data = await removeOneEmpolyee(id);
        response.status(200).json(data);
    } catch (error) {
        next(error);
    }
});

module.exports = router;