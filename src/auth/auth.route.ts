import * as express from 'express';

const authRouter = express.Router();

authRouter.get("/",(req, res) => {
    let data = {message:"hello from auth router !!!!"};
    res.send(data);
});

export default authRouter;