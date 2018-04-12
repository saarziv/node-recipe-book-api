import * as express from 'express';
import * as bodyParser from 'body-parser';
import shoppingListRouter from './shopping-list/shopping-list.route'
import authRouter from './auth/auth.route';

class App {

    //express.application is the return type from express() function call.
    public express: express.Application;
    constructor() {

        this.express = express();
        this.middleware();
        this.routes();
    }

    private middleware(): void {
        this.express.use(bodyParser.json());
        this.express.use((req,res,next) => {
            res.header("Access-Control-Allow-Origin", "*");
            res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
            next();
        })
    }

    private routes(): void {
        this.express.use("/shoppingList",shoppingListRouter);
        this.express.use("/auth",authRouter);
    }
}

export default new App().express;