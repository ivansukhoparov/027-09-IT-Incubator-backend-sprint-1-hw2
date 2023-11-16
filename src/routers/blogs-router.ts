import {Router,Request, Response} from "express";
import {BlogRepository} from "../repositories/blog-repository";
import {Params, RequestWithParams} from "../types/common";

export const blogsRouter = Router();

blogsRouter.get("/", (req:Request,res:Response)=>{
    BlogRepository.getAllBlogs();
})

blogsRouter.get("/:id", (req:RequestWithParams<Params>,res:Response)=>{
    BlogRepository.getBlogById(req.params.id);
})
