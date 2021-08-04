import express from "express";                                                          //need to import express   
import employeeRouter from "./employeeRoutes";
import productRouter from "./productRoutes";

const router = express.Router();                                                        //create a variable router

router.use("/employees", employeeRouter);                                               //switch by what they are looking for either empolyees or products. can add more, specify an option of what middlewear you want to use
router.use("/products", productRouter);

module.exports = router;
