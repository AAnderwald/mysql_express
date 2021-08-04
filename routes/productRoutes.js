import express from "express";                                                  //need to import express   
import { 
    getAllProducts,                                                                 //can copy and paste this list form the products.js so don't need to type out again.
    getOneProduct, 
    insertOneProduct, 
    updateOneProduct, 
    removeOneProduct,
} from "../db/queries/products";

const router = express.Router();

router.get("/:id?", async (request, response, next) => {                   //get all products or if pass in an id take the parameter and pass it in to get one 
    try { 
        let {id} = request.params;
        let data;
        if(id) {
            [data] = await getOneProduct(id);                                       //array destruction for the data [data]
        } else {
            data = await getAllProducts();
        }
        response.status(200).json(data);
    } catch (error) {
        next(error)
    }
});

router.post("/", async (request, response, next) => {
    try {
      let {body} = request;
      let data = await insertOneProduct(body);
      response.status(200).json(data); 
    } catch (error) {
        next(error);
    }
});

router.put("/:id", async (request, response, next) => {
    try {
        let {id} = request.params;
        let {body} = request;
        let data = await updateOneProduct(id, body);
        response.status(200).json(data);
    } catch (error) {
        next(error);
    }
});

router.delete("/:id", async (request, response, next) => {
    try {
        let {id} = request.params;
        let data = await removeOneProduct(id);
        response.status(200).json(data);
    } catch (error) {
        next(error);
    }
});

module.exports = router;

