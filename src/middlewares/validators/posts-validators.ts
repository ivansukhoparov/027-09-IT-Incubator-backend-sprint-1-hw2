import {body} from "express-validator";
import {BlogsRepository} from "../../repositories/blogs-repository";


const validatePostTitle = body("title").trim().isString().notEmpty().isLength({min: 1, max: 30})
const validatePostDescription = body("shortDescription").trim().isString().notEmpty().isLength({min: 0, max: 100});
const validatePostContent = body("content").trim().isString().notEmpty().isLength({min: 0, max: 1000});
const validateBlogID = body("blogId").isString().notEmpty().custom(value => BlogsRepository.getBlogById(value)?.id === value);

export const validationPostsChains = () => [validatePostTitle, validatePostDescription, validatePostContent, validateBlogID];