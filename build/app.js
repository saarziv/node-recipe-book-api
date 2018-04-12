"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const bodyParser = require("body-parser");
const shopping_list_route_1 = require("./shopping-list/shopping-list.route");
class App {
    constructor() {
        this.express = express();
        this.middleware();
        this.routes();
    }
    middleware() {
        this.express.use(bodyParser.json());
        this.express.use((req, res, next) => {
            res.header("Access-Control-Allow-Origin", "*");
            res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
            next();
        });
    }
    routes() {
        this.express.use("/shoppingList", shopping_list_route_1.default);
    }
}
exports.default = new App().express;
