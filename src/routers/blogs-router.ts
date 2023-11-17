import {Router, Request, Response} from "express";
import {BlogRepository} from "../repositories/blog-repository";
import {HTTP_STATUSES, Params, RequestWithBody, RequestWithBodyAndParams, RequestWithParams} from "../types/common";
import {CreateBlogDto, UpdateBlogDto} from "../types/blogs/input";


export const blogsRouter = Router();

blogsRouter.get("/", (req: Request, res: Response) => {
    const blogs = BlogRepository.getAllBlogs();
    res.status(HTTP_STATUSES.OK_200).json(blogs);
})

blogsRouter.get("/:id", (req: RequestWithParams<Params>, res: Response) => {
    const blog = BlogRepository.getBlogById(req.params.id);
    if (blog) {
        res.status(HTTP_STATUSES.OK_200).json(blog);
        return
    } else {
        res.sendStatus(HTTP_STATUSES.NOT_FOUND_404)
    }
})

blogsRouter.post('/', (req: RequestWithBody<CreateBlogDto>, res: Response) => {
    const creatData = req.body;
    const blogID = BlogRepository.createBlog(creatData);
    const newBlog = BlogRepository.getBlogById(blogID);
    if (newBlog) {
        res.status(HTTP_STATUSES.CREATED_201).json(newBlog);
        return
    }
    res.sendStatus(HTTP_STATUSES.BAD_REQUEST_400)
})

blogsRouter.put("/:id", (req:RequestWithBodyAndParams<Params, UpdateBlogDto>, res:Response)=>{
    const updateData = req.body;
    const isUpdated = BlogRepository.updateBlog(req.params.id, updateData);
    if (isUpdated) {
        res.sendStatus(HTTP_STATUSES.NO_CONTENT_204);
        return
    }
    res.sendStatus(HTTP_STATUSES.BAD_REQUEST_400);
})

blogsRouter.delete("/:id", (req:RequestWithParams<Params>, res:Response)=>{
    const isDeleted = BlogRepository.deleteBlog(req.params.id);
    if (isDeleted){
    res.sendStatus(HTTP_STATUSES.NO_CONTENT_204);
    return;
    }
    res.sendStatus(HTTP_STATUSES.NOT_FOUND_404);
})