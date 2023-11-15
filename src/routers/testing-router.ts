import Router from "express";

export const testingRouter = Router()

testingRouter.delete("/testing/all-data", (req:Request, res:Response):void=>{
    videos = [];
    res.sendStatus(204);
})