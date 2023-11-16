import {BlogType} from "../types/blogs/output";
import {db} from "../db/db";
import {blogsRouter} from "../routers/blogs-router";

export class BlogRepository{

    // return all blogs from database
    static  getAllBlogs():BlogType[]{
        return db.blogs;
    };

    // return one blog with given id
    static getBlogById(id:string){
        const blog = db.blogs.find(blog => blog.id === id);

        if (!blog){
            return null;
        }

        return blog;
    }
}