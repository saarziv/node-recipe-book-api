import * as express from 'express';

const shoppingListRouter = express.Router();

shoppingListRouter.get("/",(req,res) => {
    let data = {message:"hello from shoppingList router !!!!"};
    res.send(data);
});

export default shoppingListRouter;