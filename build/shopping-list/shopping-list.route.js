"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const shoppingListRouter = express.Router();
shoppingListRouter.get("/", (req, res) => {
    res.send("hello from shoppingList router !");
});
exports.default = shoppingListRouter;
