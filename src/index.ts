import express, {Request, Response} from "express";

export const app = express();
const port:number = 5003;

app.listen(port, ()=>{
    console.log(`application start on ${port} port`);
})