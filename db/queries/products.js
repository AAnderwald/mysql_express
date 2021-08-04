import Query from "../models";

const getAllProducts = () => {
    return Query("SELECT * from products");
}

const getOneProduct = (id) => {
    return Query ("SELECT * from products WHERE ProductID = ?", [id]);
}

const insertOneProduct = (product) => {
    return Query ("INSERT INTO products SET ?", [product]);
}

const updateOneProduct = (id, product) => {
    return Query ("UPDATE products Set ? WHERE ProductID = ?", [product, id]);              //pay attention here the product goes first then ID because of how it is stated in the line before
}

const removeOneProduct = (id) => {
    return Query ("Delet FROM products WHERE ProductID = ?", [id]);
}

module.exports = {                                                                      //export all of these from above
    getAllProducts,
    getOneProduct,
    insertOneProduct,
    updateOneProduct,
    removeOneProduct,
};
