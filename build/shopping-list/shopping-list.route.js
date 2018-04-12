"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const shoppingListRouter = express.Router();
shoppingListRouter.get("/", (req, res) => {
    let data = { message: "hello from shoppingList router !!!!" };
    res.send(data);
});
exports.default = shoppingListRouter;
