import * as express from 'express';

const shoppingListRouter = express.Router();

shoppingListRouter.get("/",(req,res) => {
    res.send("hello from shoppingList router !");
});

export default shoppingListRouter;